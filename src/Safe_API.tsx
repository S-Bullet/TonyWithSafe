
function handleSignInOnSafeWallet() {
    console.log("sign in to safe wallet");
}

function handleSignOutOnSafeWallet() {
    console.log("sign out from safe wallet");

}

function handleExecuteTransaction() {
    console.log("execute transaction");

}

function Safe_API() {
    return (
        <div>
            <button id="sign-in" onClick={handleSignInOnSafeWallet}>Sign In</button>
            <button id="sign-out" onClick={handleSignOutOnSafeWallet}>Sign Out</button>
            <button id="execute-transaction" onClick={handleExecuteTransaction}>Execute transaction</button>
        </div>
    )
}

export default Safe_API;