cd multi-browser
VER=`cat manifest.json |grep \"version\" |cut -d '"' -f 4`
zip -r ../asyncgo-multi-browser-$VER.zip .
