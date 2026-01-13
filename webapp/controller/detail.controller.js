sap.ui.define(
    ["so/app/controller/BaseController",
        "so/app/model/formatter"
    ],
    function (BaseController, formatter) {
        return BaseController.extend("so.app.controller.detail", {

            formatter: formatter,

            onInit: function () {
                //Get the router object
                this.oRouter = this.getOwnerComponent().getRouter();
                //Attach the event handler function "routemap". When ever the route is triggered, this function will be called
                this.oRouter.getRoute("myRoutes2").attachPatternMatched(this.routemap, this);
            },

            routemap: function (oEvent) {
                //get the ID which is clicked by user
                var id = oEvent.getParameter("arguments").id;
                var sPath = "/A_Product('" + id + "')";

                oView = this.getView();
                // 2. Set delay to 0 so the spinner appears instantly, then start busy state
                oView.setBusyIndicatorDelay(0);

                //element binding
                oView.bindElement({
                    path: sPath,
                    parameters: {
                        expand: "to_Description,to_ProductUnitsOfMeasure"
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
            onDelete: function () {
                

            },
            onEdit: function () {

                //Get the spath of item
                var sPath = this.getView().getBindingContext().getProperty("Product");
                //Get the router object
                var oRouter = this.getOwnerComponent().getRouter();
                //Navigate to edit view
                oRouter.navTo("myRoutes4", {
                    id: sPath
                });
            }
        })
    }
)