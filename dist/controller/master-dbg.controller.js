sap.ui.define(
    ["so/app/controller/BaseController",
     "so/app/model/formatter"
    ],
    function (BaseController, formatter) {
        return BaseController.extend("so.app.controller.master", {

            formatter: formatter,

            onInit: function () {
                this.OdataModel = this.getOwnerComponent().getModel();
            },

            onSearch: function (oEvent) {
                //Get the value provided by user
                var sValue = oEvent.getParameter("query");
                //Create filter object
                var oFilter = new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, sValue);
                //Get aggregation of list items
                var oAggregate = this.getView().byId("prodListID").getBinding("items");
                //Pass the filter to the binding
                oAggregate.filter(oFilter);
            },
            onItemPress: function (oEvent) {
                //Get the item selected by user
                var sItem = oEvent.getParameter("listItem");
                //Get the spath of item
                var sPath = sItem.getBindingContext().getProperty("Product");
                this.onNavigate(sPath);
            },
            onNavigate: function (sPath) {
                // Get Router
                var oRouter = this.getOwnerComponent().getRouter();
                // Navigate to detail view
                oRouter.navTo("myRoutes2", {
                    id: sPath
                });
            },
            onCreate: function () {
                // Get Router
                var oRouter = this.getOwnerComponent().getRouter();
                // Navigate to create view
                oRouter.navTo("myRoutes3");
            },
        })
    }
)