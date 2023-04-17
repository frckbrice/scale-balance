const sbform = document.querySelector("#sbform");
const balance = document.querySelector(".balance");
const listOfWeights = document.querySelector(".array-weight");

balance.style.cursor = 'pointer';
balance.addEventListener('click',ScaleBalancing);
const display = ScaleBalancing();
console.log(display);
 
// function to balance the scale having two object weights
let result = [];

function ScaleBalancing(newWeight) {
  // to get the two elements of the balance
  const leftWeight = parseInt(document.getElementById("lftweight").value);

  const rightWeight = parseInt(document.getElementById("rgtweight").value);

  // to get all the input elements
   let NodeListe = document.querySelectorAll(".weight");
  //to convert the returned Node list to an array
  let weights = [];
  weights = Array.prototype.slice.call(NodeListe, 0);

  //to convert array of string to array of integer 
  let newWeight = [];
  for (let i = 0; i < weights.length; i++) {
    newWeight[i] = parseInt(weights[i].value);
  }

  console.log(leftWeight);
  console.log(rightWeight);
  if (leftWeight == rightWeight) {
    console.log("equal");
    result = [leftWeight, rightWeight];
    // case where the two weights are equal
    return "equal";
  } else {
    for (let i = 0; i < newWeight.length; i++) {
      console.log(newWeight[i]);

      if (
        leftWeight + newWeight[i] === rightWeight ||
        rightWeight + newWeight[i] === leftWeight
      ) {
        if (leftWeight > rightWeight) {
          result = ["right", newWeight[i]];
          return "  right, add : " + newWeight[i];
        } else {
          result = ["left", newWeight[i]];
          return "  left, add : " + newWeight[i];
        }
      }
    }

    // case2: where we add two weights one side

    for (let i = 0; i < weights.length; i++) {
      for (let j = 0; j < weights.length; j++) {
        if (leftWeight === rightWeight + newWeight[i] + newWeight[j]) {
          result = ["right, add", newWeight[i], newWeight[j]];
          return " right, add : " + newWeight[i] + "  and : " + newWeight[j];
        } else if (rightWeight === leftWeight + newWeight[i] + newWeight[j]) {
          result = ["left, add", newWeight[i], newWeight[j]];
          return " left, add : " + newWeight[i] + "  and : " + newWeight[j];
        } else {
          // case3:  where we add one weight on both sides
          if (leftWeight + newWeight[i] === rightWeight + newWeight[j]) {
            if (leftWeight > rightWeight) {
              result = ["left, add", newWeight[j], newWeight[i]];
              return (
                " left, add : " + newWeight[j] + ", right add : " + newWeight[i]
              );
            } else {
              result = ["left, add", newWeight[i], newWeight[j]];
              return (
                " left, add : " + newWeight[i] + ", right add : " + newWeight[j]
              );
            }
          }
        }
      }
    }
  } //end of else non equal

  // return "Scale Imbalanced";
}

const resultat = document.querySelector(".resultat");

const resultat1 = document.querySelector(".resultat1");

// resultat1.innerHTML = display;
resultat.style.color = "#fff";
resultat.style.fontFamily = "serif";
resultat.innerHTML = result;

// console.log(ScaleBalancing());

// let strArray = ["[6,18]", "[1,7,4,5,41,5, 9, 8]"];
// console.log(ScaleBalancing(strArray));
