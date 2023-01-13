const fs = require('fs')
const filePath = './src/meta.json'

const buildNumber = (info) => {
  const oldVersion = info.version
  info.version = oldVersion || '1.0.0'

  let versionSplit = info.version.split('.')

  let buildNumber = parseInt(versionSplit.pop())
  if (isNaN(buildNumber)) {
    buildNumber = 0
  }

  versionSplit.push(++buildNumber)

  const version = versionSplit.join('.')
  console.log(`Up Version: ${oldVersion} => ${version}`)
  return version
}

const readJson = JSON.parse(fs.readFileSync(filePath).toString())

const jsonData = {
  buildDate: new Date().getTime(),
  version: buildNumber(readJson),
}

const jsonContent = JSON.stringify(jsonData)

fs.writeFile(filePath, jsonContent, 'utf8', function (error) {
  if (error) {
    console.log(
      'An error occured while saving build date and time to meta.json',
    )
    return console.log(error)
  }

  console.log('Latest build date and time updated in meta.json file')
})
