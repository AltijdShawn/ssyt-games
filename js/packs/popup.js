const popupConfig = {
    name: 'popup.js',
    version: '1.0.0'
}

ssyt.console.log(`${popupConfig.name} Loaded!\nVersion: ${popupConfig.version}`)



//openPopUp() <SCRIPT>

console.info(`Pop Up Script Usage \n \nPopUpLink = ""; openPopUp()`);

var PopUpLink;

function openPopUp() {
  window.open(PopUpLink,'popUpWindow','height=650,width=675,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}
