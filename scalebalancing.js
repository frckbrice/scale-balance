const sbform = document.querySelector("#sbform");
const balance = document.querySelector(".balance");
const listOfWeights = document.querySelector(".array-weight");

let result = [];

balance.style.cursor = 'pointer';
balance.addEventListener("click", displayscalebalance);

const result1 = document.querySelector(".resultat");
const precise = document.querySelector(".precise");


result1.style.color = "#fff";
result1.style.fontFamily = "serif";
result1.innerHTML = result;

function displayscalebalance(){
  console.log(ScaleBalancing());
  precise.innerHTML = ScaleBalancing();
  result1.innerHTML = result;
}
 
// function to balance the scale having two object weights
function ScaleBalancing() {

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

  // case where the two weights are equal
  if (leftWeight == rightWeight) {
    console.log("equal");
    result = [leftWeight, rightWeight];
    return "equal";
  } else {
    for (let i = 0; i < newWeight.length; i++) {
      if (
        leftWeight + newWeight[i] === rightWeight ||
        rightWeight + newWeight[i] === leftWeight
      ) {
        if (leftWeight > rightWeight) {
          result = [newWeight[i]];
          return "  right, add : " + newWeight[i];
        } else {
          result = [newWeight[i]];
          return "  left, add : " + newWeight[i];
        }
      }
    }

    // case2: where we add two weights one side
    for (let i = 0; i < weights.length; i++) {
      for (let j = 0; j < weights.length; j++) {
        if (leftWeight === rightWeight + newWeight[i] + newWeight[j]) {
          if (newWeight[i] > newWeight[j]) {
            result = [newWeight[j], newWeight[i]];
          } else {
            result = [newWeight[i], newWeight[j]];
          }
          return (
            " right, add the two : " + newWeight[i] + "  and : " + newWeight[j]
          );
        } else if (rightWeight === leftWeight + newWeight[i] + newWeight[j]) {
          if (newWeight[i] > newWeight[j]) {
            result = [newWeight[j], newWeight[i]];
          } else {
            result = [newWeight[i], newWeight[j]];
          }
          return (
            " left, add the two : " + newWeight[i] + "  and : " + newWeight[j]
          );
        } else {

          // case3:  where we add one weight on both sides
          if (leftWeight + newWeight[i] === rightWeight + newWeight[j]) {
            if (leftWeight > rightWeight) {
              if (newWeight[i] > newWeight[j]) {
                result = [newWeight[j], newWeight[i]];
                return (
                  " left, add : " +
                  newWeight[j] +
                  ", right add : " +
                  newWeight[i]
                );
              } else {
                result = [newWeight[i], newWeight[j]];
                return (
                  " left, add : " +
                  newWeight[i] +
                  ", right add : " +
                  newWeight[j]
                );
              }
            } else {
              if (newWeight[i] > newWeight[j]) {
                result = [newWeight[j], newWeight[i]];
                return (
                  " left, add : " +
                  newWeight[i] +
                  ", right add : " +
                  newWeight[j]
                );
              } else {
                result = [newWeight[i], newWeight[j]];
                return (
                  " left, add : " +
                  newWeight[j] +
                  ", right add : " +
                  newWeight[i]
                );
              }
            }
          }
        }
      }
    }
  } 
  result = "Scale Imbalanced";
  return "Scale Imbalanced";
}

// test of js code
// let strArray = ["[6,18]", "[1,7,4,5,41,5, 9, 8]"];
// console.log(ScaleBalancing(strArray));
