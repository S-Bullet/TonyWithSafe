
import {
    SafeAuthPack,
    SafeAuthInitOptions,
    AuthKitSignInData
} from '@safe-global/auth-kit';

import { ethers } from 'ethers';

let signInData: AuthKitSignInData;
let provider: ethers.providers.Web3Provider;

const safeAuthInitOptions: SafeAuthInitOptions = {
    enableLogging: true,
    showWidgetButton: false,
    chainConfig: {
        rpcTarget: 'https://gnosis.drpc.org',
        chainId: '0x64',
    },
};

const safeAuthPack = new SafeAuthPack();
// await safeAuthPack.init(safeAuthInitOptions);

async function handleSignInOnSafeWallet() {
    console.log("sign in to safe wallet");
    // signInData = await safeAuthPack.signIn();
}

async function handleSignOutOnSafeWallet() {
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