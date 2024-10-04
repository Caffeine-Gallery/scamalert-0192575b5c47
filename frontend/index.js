import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./declarations/backend/backend.did.js";

const agent = new HttpAgent();
const backendActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: process.env.BACKEND_CANISTER_ID,
});

document.getElementById("creditCardForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value;
  const cardHolder = document.getElementById("cardHolder").value;
  const expirationDate = document.getElementById("expirationDate").value;
  const cvv = document.getElementById("cvv").value;

  try {
    await backendActor.storeCreditCardInfo(cardNumber, cardHolder, expirationDate, cvv);
    alert("Credit card information stored successfully!");
    e.target.reset();
  } catch (error) {
    console.error("Error storing credit card information:", error);
    alert("An error occurred while storing the credit card information.");
  }
});
