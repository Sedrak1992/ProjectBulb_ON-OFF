const app = document.querySelector(".app");
app.innerHTML = `
<div>
    <h1>
        Turn the light on and off
        <br />
        by clicking the bulb!
    </h1>
    <div  class="divBox">
        <img src="img/OFFbulb.jpeg" alt="lamp" class=" iimg"/>
        <img src="img/ONbulb.jpeg" alt="lamp" class="imgLampMiacrac"/>
    </div>
</div>
  `;
const imgLalp = document.querySelector(".iimg");
const imgLampMiacrac = document.querySelector(".imgLampMiacrac");

const f = () => {
  imgLampMiacrac.classList.toggle("dexin");
  imgLalp.classList.toggle("dexin");
};

imgLalp.onclick = f;
imgLampMiacrac.onclick = f;
