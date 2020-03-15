const express = require('express');
const path = require('path');
const compareImages = require('resemblejs/compareImages');
const fs = require('mz/fs');

const router = express.Router();

module.exports = router;

const funcionalidades = [
{front: 'Ver front page'},
{themes: 'Cambiar el tema (color)'},
{browser: 'Ver post en navegador'},
{suscribed: 'Ver los subreddits suscritos'},
{pinned: 'Ver los subreddits pineados'},
{pin: 'Pin o unpin un post'},
{all: 'Ver todos los subreddits'},
{accounts: 'Cambiar cuenta'}
];

router.get('/' , async (req,res)=>{
  const reportes= await getDiffs();
  await res.render('index', {reportes});
});

async function getDiffs(){
  let reportes=[];
  for(let i=0; i< funcionalidades.length; i++){
    const resp = await getDiff(funcionalidades[i]);
    reportes.push(resp);
  }
  return reportes;
}

async function getDiff(d){
  const options = {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 255
      },
      errorType: "flat",
      transparency: 0.3,
      largeImageThreshold: 1200,
      useCrossOrigin: false,
      outputDiff: true
    },
    scaleToSameSize: true,
    ignore: ["antialiasing","colors"]
  };
  const data = await compareImages(
    await fs.readFile(path.join(__dirname, '../public',Object.keys(d)[0],'limpia.png')),
    await fs.readFile(path.join(__dirname, '../public',Object.keys(d)[0],'modificada.png')),
    options
  );
  await fs.writeFile((path.join(__dirname, '../public',Object.keys(d)[0],'diff.png')), data.getBuffer());
  return({
      funcionalidad: Object.values(d)[0],
      folder: Object.keys(d)[0]+'//',
      info_importante: 'la imagen base es ' + data.misMatchPercentage + '% diferente a la imagen modificada'
  });
}