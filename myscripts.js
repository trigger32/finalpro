//JavaScript Document

function addtasks() {
		var target = document.getElementById("footer");

	var newDiv = document.createElement("div");
		var header = document.createElement("h2");
			var when = document.createElement("h3");
				var type = document.createElement("p");
				var descrip = document.createElement("p");
				var descripbox = document.createElement("p");

					var targetname = document.querySelector("#targetname").value;
					var targettime = document.querySelector("#time").value;
					var targetdrop = document.querySelector("#drop").value;
					var targetdescrip = document.querySelector("#descrip").value;

	newDiv.setAttribute("id", "newDiv");

		header.setAttribute("id", "header2");
			when.setAttribute("id", "when");
				type.setAttribute("id", "type");
					descrip.setAttribute("id", "descripp");
					descripbox.setAttribute("id", "descripbox");

					header.textContent = "Task name : " + targetname;
					when.textContent = "What time is the task : " + targettime;
					type.textContent = "What type of task : " + targetdrop;
					descrip.textContent = "Task Description : ";
					descripbox.textContent = targetdescrip;


			newDiv.appendChild(header);
			newDiv.appendChild(when);
			newDiv.appendChild(type);
			newDiv.appendChild(descrip);
			newDiv.appendChild(descripbox)

				target.appendChild(newDiv);
document.getElementById('descrip').value = " ";
document.getElementById('targetname').value = " ";
}
function addmeeting() {
	var target = document.getElementById("footer");

var newDiv = document.createElement("div");
	var header = document.createElement("h2");
		var when = document.createElement("h3");
			var type = document.createElement("p");
			var loca = document.createElement("p");
			var descrip = document.createElement("p");
			var descripbox = document.createElement("p");

				var targetname2 = document.querySelector("#targetname2").value;
				var targettime2 = document.querySelector("#time2").value;
				var targetdrop2 = document.querySelector("#drop2").value;
				var targetdescrip2 = document.querySelector("#descript").value;
				var loca2 = document.querySelector("#loca2").value;

newDiv.setAttribute("id", "newDiv2");

	header.setAttribute("id", "header2");
		when.setAttribute("id", "when");
			type.setAttribute("id", "type");
			loca.setAttribute("id", "loca");
				descrip.setAttribute("id", "descripp");
				descripbox.setAttribute("id", "descripbox");

				header.textContent = "Meeting name : " + targetname2;
				when.textContent = "What time is the meeting : " + targettime2;
				type.textContent = "What type of meeting : " + targetdrop2;
				loca.textContent = "Meeting location : " + loca2;
				descrip.textContent = "Meeting Description : ";
				descripbox.textContent = targetdescrip2;


		newDiv.appendChild(header);
		newDiv.appendChild(when);
		newDiv.appendChild(type);
		newDiv.appendChild(loca);
		newDiv.appendChild(descrip);
		newDiv.appendChild(descripbox)
			target.appendChild(newDiv);

			document.getElementById('descript').value = " ";
			document.getElementById('loca2').value = " ";
			document.getElementById('targetname2').value = " ";
}

function planner(){
		document.getElementById("cardd").style.display = "block";
		document.getElementById("tasks").style.display = "none";
		document.getElementById("tasks2").style.display = "none";
		document.getElementById("tasks3").style.display = "block";

		var element1 = document.getElementById("taskhead");
		element1.remove();


			var targethead = document.getElementById("header");
				var newhead = document.createElement("h1");

					newhead.setAttribute("id", "planhead");
					newhead.textContent = "Welcome to the Planning Page!"
						targethead.appendChild(newhead);

}
function taskmaster(){
		document.getElementById("cardd").style.display = "none";
		document.getElementById("tasks").style.display = "block";
		document.getElementById("tasks2").style.display = "block";
		document.getElementById("tasks3").style.display = "none";

			var element = document.getElementById("planhead");
			element.remove();


			var targethead2 = document.getElementById("header");
				var newhead2 = document.createElement("h1");

					newhead2.setAttribute("id", "taskhead");
					newhead2.textContent = "Welcome to the Task Page!"
						targethead2.appendChild(newhead2);
}
function clearr(){
	var clearr = document.getElementById("newDiv");
	clearr.remove();
}
function clearrr(){
	var clearrr = document.getElementById("newDiv2");
	clearrr.remove();
}
function Login(){
		document.getElementById("signform2").style.display = "block";
		document.getElementById("signh3").style.display = "block";
		document.getElementById("signh").style.display = "none";
		document.getElementById("button1").style.display = "none";
		document.getElementById("button3").style.display = "none";
		document.getElementById("button2").style.display = "block";


}
function Signin(){
		document.getElementById("signform").style.display = "block";
		document.getElementById("signh2").style.display = "block";
		document.getElementById("signh").style.display = "none";
		document.getElementById("button1").style.display = "none";
		document.getElementById("button3").style.display = "none";
		document.getElementById("button2").style.display = "block";

}
function cancel(){
	document.getElementById("signform").style.display = "none";
	document.getElementById("signform2").style.display = "none";
	document.getElementById("button1").style.display = "block";
	document.getElementById("button3").style.display = "block";
	document.getElementById("signh").style.display = "block";
	document.getElementById("signh2").style.display = "none";
	document.getElementById("signh3").style.display = "none";
	document.getElementById("button2").style.display = "none";
}

function redirectMe() {
  window.location.replace("main.html");
  return false;

}
function signout() {
  window.location.replace("signin.html");
  return false;
}
function remove(){
	document.getElementById("info").style.display = "none";
}
