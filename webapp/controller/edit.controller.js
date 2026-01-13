sap.ui.define(
    ["so/app/controller/BaseController",
        "so/app/model/formatter",
        "sap/m/MessageBox"
    ],
    function (BaseController, formatter, MessageBox) {
        return BaseController.extend("so.app.controller.edit", {

            formatter: formatter,

            onInit: function () {
                //Get the router object
                this.oRouter = this.getOwnerComponent().getRouter();
                //Attach the event handler function "routemap". When ever the route is triggered, this function will be called
                this.oRouter.getRoute("myRoutes4").attachPatternMatched(this.handler, this);
                //Get the OData model
                this.oDataModel = this.getOwnerComponent().getModel();
            },

            handler: function (oEvent) {
                var id = oEvent.getParameter("arguments").id;
                var sPath = "/A_Product('" + id + "')";

                oView = this.getView();
                // 2. Set delay to 0 so the spinner appears instantly, then start busy state
                oView.setBusyIndicatorDelay(0);

                //element binding
                oView.bindElement({
                    path: sPath,
                    parameters: {
                        expand: "to_Description"
                    },
                    events: {
                        dataRequested: function () {
                            // Fires when the network request starts
                            oView.setBusy(true);
                        },
                        dataReceived: function () {
                            // Fires when data arrives OR if the request fails
                            oView.setBusy(false);
                        }
                    }
                });

            },

            onSave: function (oEventSave) {
                //
                that = this
                //Get the view object
                var oView = this.getView();
                //Get the spath of item
                var sPath = oView.getBindingContext().getProperty("Product");
                //Set delay to 0 so the spinner appears instantly, then start busy state
                oView.setBusyIndicatorDelay(0);
                oView.setBusy(true);
                //Update the item

                this.oDataModel.submitChanges({
                    success: function () {
                        oView.setBusy(false);
                        MessageBox.success("Product updated successfully", {
                            onClose: function () {
                                that.oRouter.navTo("myRoutes2", {
                                    id: sPath
                                });
                            }
                        });

                    },
                    error: function (oError) {
                        oView.setBusy(false);
                        MessageBox.error("Error updating product");
                    }
                });
            },

            onCancel: function () {
                //Get the spath of item
                var sPath = this.getView().getBindingContext().getProperty("Product");

                //Navigate to display view
                this.oRouter.navTo("myRoutes2", {
                    id: sPath
                });
            },

        })
    }
)