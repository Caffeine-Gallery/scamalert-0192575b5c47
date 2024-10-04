export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCreditCardCount' : IDL.Func([], [IDL.Nat], ['query']),
    'storeCreditCardInfo' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
