document.addEventListener("DOMContentLoaded", function () {


 //ProgressBar
  const progressBar = document.getElementById("progress-bar");
  const nextBtn = document.getElementById("next-btn");

  let percentage = 0;

  nextBtn.addEventListener("click", function () {
    if (percentage < 100) {
      percentage += 100/13 ; // Increase the percentage by 100/13
      updateProgressBar();
    }

  });

  function updateProgressBar() {
    progressBar.style.width = percentage + "%";
    progressBar.textContent = percentage + "%";
  }

    let qNumber = 1;
    const startBtn = document.getElementById("start-btn");
    const inputUserName = document.getElementById("name");
    const submitUserName = document.getElementById("next-btn");
    const skipUserName = document.getElementById("skip-btn");
    const nameBtn = document.getElementById("name-btn");
    const outputContainer = document.getElementById("output-container");
    const outputmainContainer = document.getElementById("main-container");
    const dynamicLabel = document.getElementById("dynamicLabel");


    //Initialize Variables

    var userName = ""; 
    var Surname = "";
    var Age = "";
    var Address = "";
    var Phone_Number = "";
    var Email = "";
    var Password = "";
    var Date_of_birth = "";
    var NIC_Number = "";
    var Your_Weight = "";
    var Your_Height = "";
    var BMI_Rate ="";
    var Diving_Experience = "";

    outputContainer.style.display = 'none';

    startBtn.addEventListener("click", function () {
        document.querySelector('.prompt').style.display = 'block';
    });

    submitUserName.addEventListener("click", function () {
        if (nameBtn.textContent === "Your Name") {  //Q 1 Enter User name
            userName = inputUserName.value.trim();
            if (userName === "") {
                alert("Enter Username:");
                return;
            }
            nameBtn.textContent = "Surname";        //Q 2 Enter Your Surname
            inputUserName.value = "";
            dynamicText(`${userName}<br>`);
        } else if (nameBtn.textContent === "Surname") {
            Surname = inputUserName.value.trim();
            if (Surname === "") {
                alert("Enter Surname:");
                return;
            }
            nameBtn.textContent = "Age";           //Q 3 Enter Your age
            inputUserName.value = "";
            dynamicText(`${Surname}<br>`);
        } else if (nameBtn.textContent === "Age") {
            Age = inputUserName.value.trim();
            if (Age === "") {
                alert("Enter Age:");
                return;
            }
            nameBtn.textContent = "Address";        //Q 4 Enter Your address
            inputUserName.value = "";
            dynamicText(`${Age}<br>`);
        } else if (nameBtn.textContent === "Address") {
            Address = inputUserName.value.trim();
            if (Address === "") {
                alert("Enter Address:");
                return;
            }
            nameBtn.textContent = "Phone Number";    //Q 5 Enter Your phone Number
            inputUserName.value = "";               
            dynamicText(`${Address}<br>`);
        } else if (nameBtn.textContent === "Phone Number") {
            Phone_Number = inputUserName.value.trim();
            if (Phone_Number === "") {
                alert("Enter Phone Number:");
                return;
            }
            nameBtn.textContent = "Email";          //Q6 Enter Your Email
            inputUserName.value = "";
            dynamicText(`${Phone_Number}<br>`);
        } else if (nameBtn.textContent === "Email") {
            Email = inputUserName.value.trim();
            if (Email === "") {
                alert("Enter Email:");
                return;
            }
            nameBtn.textContent = "Password";      //Q7 Enter Your Password
            inputUserName.value = "";
            dynamicText(`${Email}<br>`);
        } else if (nameBtn.textContent === "Password") {
            Password = inputUserName.value.trim();
            if (Password === "") {
                alert("Enter Password:");
                return;
            }

            nameBtn.textContent = "Date_of_birth";    //Q8 Enter Your Birth Day
            inputUserName.value = "";
            dynamicText(`${Password}<br>`);
        } else if (nameBtn.textContent === "Date_of_birth") {
            Date_of_birth = inputUserName.value.trim(); 
            if (Date_of_birth === "") {
                alert("Enter Date_of_birth:");
                return;
            }

            nameBtn.textContent = "NIC_Number";       //Q9 Enter Your NIC_Number
            inputUserName.value = "";
            dynamicText(`${Date_of_birth}<br>`); 
        } else if (nameBtn.textContent === "NIC_Number") {
            NIC_Number = inputUserName.value.trim();
            if (NIC_Number === "") {
                alert("Enter NIC_Number:");
                return;
            }

            nameBtn.textContent = "Your_Weight";      //Q10 Enter Your Weight
            inputUserName.value = "";
            dynamicText(`${NIC_Number}<br>`);
        } else if (nameBtn.textContent === "Your_Weight") {
            Your_Weight = inputUserName.value.trim();
            if (Your_Weight === "") {
                alert("Enter Your_Weight:");
                return;
            }

            nameBtn.textContent = "Your_Height";      //Q11 Enter Your Height
            inputUserName.value = ""; 
            dynamicText(`${Your_Weight}<br>`); 
        } else if (nameBtn.textContent === "Your_Height") {
            Your_Height = inputUserName.value.trim();
            if (Your_Height === "") {
                alert("Enter Your_Height:");
                return;
            }

            nameBtn.textContent = "BMI_Rate";          //Q12 Enter Your BMI Rate
            inputUserName.value = "";
            dynamicText(`${Your_Height}<br>`); 
        } else if (nameBtn.textContent === "BMI_Rate") {
            BMI_Rate = inputUserName.value.trim();
            if (BMI_Rate === "") {
                alert("Enter BMI_Rate:");
                return;
            }
 
            nameBtn.textContent = "Diving_Experience";     //Q13 Enter Your Diving_Experience
            inputUserName.value = "";
            dynamicText(`${BMI_Rate}<br>`); 
        } else if (nameBtn.textContent === "Diving_Experience") {
            Diving_Experience = inputUserName.value.trim();
            if (Diving_Experience === "") {
                alert("Enter Diving_Experience:");
                return;
            }

            outputContainer.style.display = 'block';
            outputmainContainer.style.display = 'none';
            dynamicText(`${Diving_Experience}<br>`);
        }

        qNumber++;
        updateqNumber();
    });

    skipUserName.addEventListener("click", function () {
        if (nameBtn.textContent === "Your Name") {
            nameBtn.textContent = "Surname";
        } else if (nameBtn.textContent === "Surname") {
            nameBtn.textContent = "Age";
        } else if (nameBtn.textContent === "Age") {
            nameBtn.textContent = "Address";
        } else if (nameBtn.textContent === "Address") {
            nameBtn.textContent = "Phone Number";
        } else if (nameBtn.textContent === "Phone Number") {
            nameBtn.textContent = "Email";
        } else if (nameBtn.textContent === "Email") {
            nameBtn.textContent = "Password";
        } else if (nameBtn.textContent === "Password") {
            nameBtn.textContent = "Date_of_birth";
        } else if (nameBtn.textContent === "Date_of_birth") {
            nameBtn.textContent = "NIC_Number";
        } else if (nameBtn.textContent === "NIC_Number") {
            nameBtn.textContent = "Your_Weight";
        } else if (nameBtn.textContent === "Your_Weight") {
            nameBtn.textContent = "Your_Height";
        } else if (nameBtn.textContent === "Your_Height") {
            nameBtn.textContent = "BMI_Rate";
        } else if (nameBtn.textContent === "BMI_Rate") {
            nameBtn.textContent = "Diving_Experience";
        } else if (nameBtn.textContent === "Diving_Experience") {
            outputContainer.style.display = 'block';
            outputmainContainer.style.display = 'none';
        }

        qNumber++;
        updateqNumber();
    });

    function updateqNumber() {
        const spnBtn = document.getElementById("spn-btn");
        spnBtn.textContent = `Personal details For Ocean ID|Question ${qNumber}/13`;
   

    }

    function dynamicText(htmlText) {
        dynamicLabel.innerHTML += htmlText;
    }
});
