const fs = require('fs')
const filePath = './package.json'

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

const packageJson = JSON.parse(fs.readFileSync(filePath).toString())
packageJson.buildDate = new Date().getTime()
packageJson.version = buildNumber(packageJson)

fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2))

const jsonData = {
  buildDate: packageJson.buildDate,
}

const jsonContent = JSON.stringify(jsonData)

fs.writeFile('./public/meta.json', jsonContent, 'utf8', function (error) {
  if (error) {
    console.log(
      'An error occured while saving build date and time to meta.json',
    )
    return console.log(error)
  }

  console.log('Latest build date and time updated in meta.json file')
})
