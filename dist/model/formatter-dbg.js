sap.ui.define(
    [],
    function () {
        return {
            formatDescription: function (aResults) {
                this.OdataModel = this.getOwnerComponent().getModel();
                //Check if array is valid
                if (!aResults || !Array.isArray(aResults) || aResults.length === 0) {
                    return "";
                }
                //Find the description with Language 'EN'
                var oEn = aResults.find(function (item) {
                    return item.includes("Language='EN'");
                });
                //Construct the path to get the description
                var sPath = "/" + oEn;
                //Get the description from the model
                var oDescription = this.OdataModel.getProperty(sPath).ProductDescription;
                //Return the description value
                return oDescription;
            }
        };
    }
)
