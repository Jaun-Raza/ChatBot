
const chatBot = async () => {

	let input = document.querySelector('#userMsg');
	let userMessage = input.value;

	let textBody = document.querySelector('.textBody');

	let messages = document.createElement('div');
	let div = document.createElement('div');
	let div2 = document.createElement('div');
	let div3 = document.createElement('div');
	let p = document.createElement('p');
	messages.className = "message";
	div.className = "d-flex justify-content-end";
	div2.className = "row col-5 m-2";
	div3.className = "yourmsg";
	p.className = "msg m-2";
	p.textContent = userMessage;
	textBody.appendChild(messages);
	messages.appendChild(div);
	div.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(p);


	console.log(userMessage);
	const url = `https://ai-chatbot.p.rapidapi.com/chat/free?message=${userMessage}&uid=user1`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd96a4e6ea5msh2ffd62a597d5b41p1c88e1jsn4ca07831f676',
			'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
		}
	};
try {

	const response = await fetch(url, options);
	const resultJSON = await response.json();
	const result = await resultJSON.chatbot['response'];
	console.log(result);


	let botMsg = document.createElement('div');
	let botmsgDiv = document.createElement('div');
	let botmsgDdiv2 = document.createElement('div');
	let botmsgP = document.createElement('p');
	botMsg.className = "botMsg";
	botmsgDiv.className = "row col-5 m-2 mt-3";
	botmsgDdiv2.className = "botmsg";
	botmsgP.className = "msg m-2";
	botmsgP.textContent = "Loading....."
	botmsgP.textContent = result;
	textBody.appendChild(botMsg)
	botMsg.appendChild(botmsgDiv);
	botmsgDiv.appendChild(botmsgDdiv2);
	botmsgDdiv2.appendChild(botmsgP);

} catch (error) {
	console.error(error);
}

}




$('#enterMsg').click(chatBot)

// {"chatbot":{"message":"Hello","response":"Hi, my friend, what can I do for you today?"}}