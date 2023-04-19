// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const listBook = [
	{
		id: 1,
		name: "one",
		slug: "asdasd",
		image: {
			widthSize: 1,
			heightSize: 1,
			alt: "",
			url: "",
		},
		authors: ["Peyman"],
		translator: "",
		price: 4,
		discount: 2,
		bookDetails: [
			{
				title: "",
				content: "",
			},
		],
		moreInformation: [
			{
				title: "",
				content: "",
			},
		],
	},
	{
		id: 2,
		name: "one",
		slug: "asdasd",
		image: {
			widthSize: 1,
			heightSize: 1,
			alt: "",
			url: "",
		},
		authors: ["Peyman"],
		translator: "",
		price: 4,
		discount: 2,
		bookDetails: [
			{
				title: "",
				content: "",
			},
		],
		moreInformation: [
			{
				title: "",
				content: "",
			},
		],
	},
	{
		id: 3,
		name: "one",
		slug: "asdasd",
		image: {
			widthSize: 1,
			heightSize: 1,
			alt: "",
			url: "",
		},
		authors: ["Peyman"],
		translator: "",
		price: 4,
		discount: 2,
		bookDetails: [
			{
				title: "",
				content: "",
			},
		],
		moreInformation: [
			{
				title: "",
				content: "",
			},
		],
	},
	{
		id: 4,
		name: "one",
		slug: "asdasd",
		image: {
			widthSize: 1,
			heightSize: 1,
			alt: "",
			url: "",
		},
		authors: ["Peyman"],
		translator: "",
		price: 4,
		discount: 2,
		bookDetails: [
			{
				title: "",
				content: "",
			},
		],
		moreInformation: [
			{
				title: "",
				content: "",
			},
		],
	},
	{
		id: 5,
		name: "Five",
		slug: "asdasd",
		image: {
			widthSize: 1,
			heightSize: 1,
			alt: "",
			url: "",
		},
		authors: ["Peyman"],
		translator: "",
		price: 4,
		discount: 2,
		bookDetails: [
			{
				title: "",
				content: "",
			},
		],
		moreInformation: [
			{
				title: "",
				content: "",
			},
		],
	},
	{
		id: 6,
		name: "one",
		slug: "asdasd",
		image: {
			widthSize: 1,
			heightSize: 1,
			alt: "",
			url: "",
		},
		authors: ["Peyman"],
		translator: "",
		price: 4,
		discount: 2,
		bookDetails: [
			{
				title: "",
				content: "",
			},
		],
		moreInformation: [
			{
				title: "",
				content: "",
			},
		],
	},
	{
		id: 7,
		name: "two",
		slug: "asdasd",
		image: {
			widthSize: 1,
			heightSize: 1,
			alt: "",
			url: "",
		},
		authors: ["Peyman"],
		translator: "",
		price: 4,
		discount: 2,
		bookDetails: [
			{
				title: "",
				content: "",
			},
		],
		moreInformation: [
			{
				title: "",
				content: "",
			},
		],
	},
];

export default function handler(req, res) {
	const key = Object.keys(req.query);
	const value = Object.values(req.query);

	let result = {
		data: [],
		status: "",
		message: "",
	};

	if (key.length == 1) {
		listBook.map(book => {
			if (book[key[0]] == value[0]) {
				result.data.push(book);
				result.status = "200";
				result.message = "Sucsess";
			}
		});
	} else {
		result.data = "Not Found";
		result.status = "401";
		result.message = "The length is too long";
	}

	res.status(parseInt(result.status)).json(result);
}
