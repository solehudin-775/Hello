export const manifest={
id:'hello',
name:'Hello',
description:'Hello',
version:'1.0',
author:'You',
apps:[
'com.android.settings',
],
permissions:[
'speech',
],
};

backtalk.onAppEnter(()=>{
backtalk.playTone(1000,1000,{volume: 0.1});
backtalk.speak('Hello from a script');
});
