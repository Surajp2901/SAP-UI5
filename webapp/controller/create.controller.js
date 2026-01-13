sap.ui.define(
    ["so/app/controller/BaseController",
        "so/app/model/formatter",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageBox"
    ],
    function (BaseController, formatter, JSONModel, MessageBox) {
        return BaseController.extend("so.app.controller.create", {

            formatter: formatter,

            onInit: function () {
                //Get the router object
                this.oRouter = this.getOwnerComponent().getRouter();
                //Attach the event handler function "route3". When ever the route is triggered, this function will be called
                this.oRouter.getRoute("myRoutes3").attachPatternMatched(this.route3, this);
                //Get the local model
                this.oLocalModel = this.getOwnerComponent().getModel("local");

            },

            onSave: function () {

                //Get data from the local model
                var oLocalData = this.oLocalModel.getProperty("/data");
                //Validation can be added here
                if (!oLocalData.Product) {
                    MessageBox.error("Please enter a product ID");
                    return;
                }
                if (!oLocalData.ProductType) {
                    MessageBox.error("Please enter a product type");
                    return;
                }
                if (!oLocalData.BaseUnit) {
                    MessageBox.error("Please enter a base unit");
                    return;
                }
                //Set product ID in the description object
                oLocalData.to_Description[0].Product = this.oLocalModel.getProperty("/data/Product");

                //Create the new entry in the OData model
                var oDataModel = this.getOwnerComponent().getModel();
                //Get the view object for busy indicator
                var oView = this.getView();
                oView.setBusyIndicatorDelay(0);
                oView.setBusy(true);

                oDataModel.create("/A_Product", oLocalData, {

                    success: function () {
                        oView.setBusy(false);
                        MessageBox.success("Product created successfully");
                    },
                    error: function (oError) {
                        oView.setBusy(false);
                        MessageBox.error("Error creating product");
                    }
                });

            },

            onCancel: function () {
                //Navigate back to the list view
                this.oRouter.navTo("myRoutes1");
            },

            route3: function (oEvent) {

                // Additional logic for create view can be added here
            }
        })
    }
)