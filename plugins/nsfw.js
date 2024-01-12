const {
	inrl,
	config,
	getJson,
	getBuffer
} = require("../lib/");

inrl({
	pattern: 'ahegao ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/ahegao?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'ass ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/ass?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'bdsm ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/bdsm?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'blowjob ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/blowjob?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'cuckold ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/cuckold?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'cum ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/cum?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'eba ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/eba?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'ero ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/ero?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'femdom ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/femdom?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'foot ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/foot?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'gangbang ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/gangbang?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'gifs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/gifs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'glasses ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/glasses?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'hentai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/hentai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'jahy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/jahy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'manga ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/manga?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'masturbation ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/masturbation?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'milf ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/milf?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'nsfwneko ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/nsfwneko?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'neko2 ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/neko2?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'nsfwloli ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/nsfwloli?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'orgy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/orgy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'panties ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/panties?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'pussy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/pussy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'tentacles ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/tentacles?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'thighs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/thighs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'yuri ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/yuri?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
inrl({
	pattern: 'zettai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/zettai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});



inrl({
	pattern: 'ahegao ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/ahegao?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'ass ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/ass?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'bdsm ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/bdsm?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'blowjob ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/blowjob?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'cuckold ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/cuckold?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'cum ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/cum?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'eba ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/eba?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'ero ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/ero?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'femdom ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/femdom?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'foot ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/foot?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'gangbang ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/gangbang?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'gifs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/gifs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'glasses ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/glasses?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'hentai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/hentai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'jahy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/jahy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'manga ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/manga?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'masturbation ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/masturbation?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'milf ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/milf?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'nsfwneko ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/nsfwneko?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'neko2 ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/neko2?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'nsfwloli ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/nsfwloli?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'orgy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/orgy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'panties ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/panties?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'pussy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/pussy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'tentacles ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/tentacles?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'thighs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/thighs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'yuri ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/yuri?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});

inrl({
	pattern: 'zettai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/anime/zettai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, 'image');
});
