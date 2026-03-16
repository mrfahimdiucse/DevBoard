const buttons = document.querySelectorAll('.completeBtn');

function disableButton(button){
  button.disabled = true;
  button.classList.remove("bg-[#3752FD]","text-white");
  button.classList.add("bg-white","text-black");
}

function increaseHeaderCount() {
  const headerCount = document.getElementById("completedTaskNumber");
  let count = parseInt(headerCount.innerText);
  count++;
  headerCount.innerText = count;
}

function increaseTaskAssigned() {
  const taskAssigned = document.getElementById("taskAssignedNumber");
  let count = parseInt(taskAssigned.innerText);
  count++;
  taskAssigned.innerText = count;
}

function addActivityLog(taskName) {
  const activityHistory = document.getElementById("activityHistory");
  const p = document.createElement("p");
  const date = new Date().toLocaleString();
  p.innerText = `Congratulations you have completed "${taskName}" on ${date}`;
  p.classList.add("bg-white", "p-2", "rounded", "mt-2");
  activityHistory.appendChild(p);
}

function checkAllCompleted() {
  const total = document.querySelectorAll(".completeBtn").length;
  const completed = parseInt(document.getElementById("completedTaskNumber").innerText);
  if (completed === total) {
    const activityHistory = document.getElementById("activityHistory");
    const p = document.createElement("p");
    p.innerText = "Successfully completed all of these course";
    p.classList.add("bg-green-200", "p-2", "rounded", "mt-2");
    activityHistory.appendChild(p);
  }
}

function clearActivityHistory() {
  const activityHistory = document.getElementById("activityHistory");
  activityHistory.innerHTML = "";
}

const clearHistoryBtn = document.getElementById("clearHistoryBtn").addEventListener("click", function() {
  clearActivityHistory();
});


function startRealTimeClock() {
  const dateElement = document.getElementById("fullDate");

  function updateClock() {
    const now = new Date();

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);

    const timeStr = now.toLocaleTimeString('en-US', { hour12: false });

    dateElement.innerText = `${dateStr} ${timeStr}`;
  }

  updateClock(); 
  setInterval(updateClock, 1000); 
}
startRealTimeClock();


buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const taskName = button.closest("div.p-4").querySelector("h2").innerText;

    disableButton(button);
    increaseHeaderCount();
    increaseTaskAssigned();
    addActivityLog(taskName);
    checkAllCompleted();
  });
});

document.getElementById('discoverCard').addEventListener('click', function(event){
    window.location.assign('./q&a.html');
});