const express = require('express');
const router = express.Router();
const ShortUrl = require('../model/url');

const { validation } = require('../middleware/validation');
const { getLongUrl } = require('../validations/url.validation');

router.get('/', (req, res, next) => {
    res.render("index");
});
router.post("/", async (req, res, next) => {
    const { url } = req.body;
    if (!url) {
        res.render('index', { error: "Provide a valid url" })
    }
    const urlExists = await ShortUrl.findOne({ url })
    if (urlExists) {
        res.render('index', {
            // short_url: `${req.hostname}/${urlExists.shortId}`,
            short_url: `${req.headers.host}/${urlExists.shortId}`,
        })
        return;
    }
    const shortUrl = await ShortUrl.create({ url: url });
    res.render('index', {
        // short_url: `${req.hostname}/${urlExists.shortId}`,
        short_url: `${req.headers.host}/${shortUrl.shortId}`,
    })
});
router.get('/:shortId', validation(getLongUrl, 'params'), async (req, res, next) => {
    const { shortId } = req.params;
    const result = await ShortUrl.findOne({ shortId })
    if (!result) {
        res.render("index", { urlError: 'Short url does not exist' })
        return;
    }
    res.redirect(result.url)

})

module.exports = router;