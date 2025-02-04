import fs from 'fs';
import yaml from 'js-yaml';
import config from './decap_config.js';

const content = yaml.dump(config)
fs.writeFileSync(`./src/config.yml`,  content)

config.collections.forEach(collection => {
  const name = collection.name
  const fields = collection.fields
  console.log('src/' + name)
  const json = {

  }
  //fs.writeFileSync(`./src/${name}.yml`,  content)
})


/*
fs.writeFileSync(`./src/config.yml`, JSON.stringify({
  
}, null, 2))


//import parser from "./tree-parser/index.js";
/*


const base = "https://minimal-decap-cms-tests.netlify.app"
const entries = fs.readdirSync('./src').filter(entry => {
  return !['admin', 'index.html'].includes(entry)
})

entries.forEach(entry => {
  const result = []

  const subentries = fs.readdirSync(`./src/${entry}`).filter(entry => {
  return !['index.json'].includes(entry)
})
  subentries.forEach(subentry => {
    const [slug , type] = subentry.split('.')

    if(type === 'json'){
      const content = JSON.parse(fs.readFileSync(`./src/${entry}/${subentry}`, 'utf-8'))
      result.push({path: subentry, slug , ...content})
      //console.log(subentry)
    } else {
      result.push(subentry)
    }
  })
  fs.writeFileSync(`./src/${entry}/index.json`, JSON.stringify(result, null, 2))
})

*/