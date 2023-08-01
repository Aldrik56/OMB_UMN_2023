import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });
  
  return (
    <div className="game">
      <h3 className="judul">DUTA HANASTA</h3>
      <img className="supergrafis" src="./Assets/Tata Cara/Group-putik_gradient.svg" alt="" />
      <p className="loading" style={{ display: (loadingProgression === 1)? 'none' : 'block' }}>Memuat... {Math.round(loadingProgression * 100)}%</p>
      <Unity unityProvider={unityProvider} style={{ width: 325, height: 425}}  />
    </div>
  );
}

export default Game;