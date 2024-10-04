import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  type CreditCardInfo = {
    cardNumber : Text;
    cardHolder : Text;
    expirationDate : Text;
    cvv : Text;
  };

  private var creditCards : [CreditCardInfo] = [];

  public func storeCreditCardInfo(cardNumber : Text, cardHolder : Text, expirationDate : Text, cvv : Text) : async () {
    let newCreditCard : CreditCardInfo = {
      cardNumber = cardNumber;
      cardHolder = cardHolder;
      expirationDate = expirationDate;
      cvv = cvv;
    };
    creditCards := Array.append(creditCards, [newCreditCard]);
  };

  public query func getCreditCardCount() : async Nat {
    creditCards.size();
  };
}
