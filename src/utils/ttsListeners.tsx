import Tts from "react-native-tts"

export const initializeTtsListeners=async()=>{
    Tts.getInitStatus().then((e)=>{
       
        Tts.setDefaultVoice("en-GB-SMTf00")
       
        console.log(e)
    }),
    (err:any)=>{
        if(err.code==='no_engine'){
            console.log("no engine");

            
            Tts.requestInstallEngine();
        }
    }
    const voices =await Tts.voices();

    Tts.setDefaultRate(2.5,true);
    Tts.setIgnoreSilentSwitch('ignore')
    Tts.setDefaultPitch(-2)
    Tts.addEventListener('tts-start',(event)=>{
        // console.log('tts started: ',event)
    })
    Tts.addEventListener('tts-progress',(event)=>{
        // console.log('tts Progress: ',event)
    })
    Tts.addEventListener('tts-cancel',(event)=>{
        // console.log('tts cancel: ',event)
    })


    


}