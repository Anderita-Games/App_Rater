#pragma strict
var main : UnityEngine.UI.Text;

function Generate () {
	var number = Random.Range(1,26);
	
	if (number == 1) {
		main.text = "Sounds Great!";
	}else if (number == 2) {
		main.text = "Sounds Horrible!";
	}else if (number == 3) {
		main.text = "Maby";
	}else if (number == 4) {
		main.text = "Click submit again";
	}else if (number == 5) {
		main.text = "nobody wants that";
	}else if (number == 6) {
		main.text = "meh its an okay idea";
	}else if (number == 7) {
		main.text = "That already exists";
	}else if (number == 8) {
		main.text = "Even I wouldnt make that app";
	}else if (number == 9) {
		main.text = "Thats to offensive";
	}else if (number == 10) {
		main.text = "the technology doesnt exist to make that app yet";
	}else if (number == 11) {
		main.text = "Thanks for the idea";
	}else if (number == 12) {
		main.text = "Sounds good if it wasnt made by you";
	}else if (number == 13) {
		main.text = "That might just cure humanity";
	}else if (number == 14) {
		main.text = "possibly a good idea";
	}else if (number == 15) {
		main.text = "possibly a bad idea";
	}else if (number == 16) {
		main.text = "you realize im just a prebuilt program who has no real opinions right?";
	}else if (number == 17) {
		main.text = "That could kill someone";
	}else if (number == 18) {
		main.text = "I bet Donald Trump would download that";
	}else if (number == 19) {
		main.text = "That idea is trash";
	}else if (number == 20) {
		main.text = "Could that even be considered an idea?";
	}else if (number == 21) {
		main.text = "I think I heard that idea before";
	}else if (number == 22) {
		main.text = "That would take to much work";
	}else if (number == 23) {
		main.text = "I would just give up if I were you";
	}else if (number == 24) {
		main.text = "You arent even a programmer. Come back when you are one";
	}else if (number == 25) {
		main.text = "That is to complicated for a quantum computer to process";
	}
}
