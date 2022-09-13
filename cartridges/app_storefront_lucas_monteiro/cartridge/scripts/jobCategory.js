var File = require("dw/io/File");
var FileWriter = require("dw/io/FileWriter");
var XMLStreamWriter = require("dw/io/XMLStreamWriter");
var ProductMgr = require("dw/catalog/ProductMgr");

exports.execute = function(args) {
    // Brand from job parameters
    var brand = args.brand;
    var products = ProductMgr.queryAllSiteProducts();
    var productsWithBrand = [];

    while (products.hasNext()) {
        var product = products.next();

        // Collect all products with a specific brand
        if (product.brand == brand) {
            productsWithBrand.push(product);
        }
    }

    // Save XML on: /on/demandware.servlet/webdav/Sites/Impex/src/exports/categoryAssign.xml
    var impexPath =
        File.IMPEX + File.SEPARATOR + "src" + File.SEPARATOR + "exports" + File.SEPARATOR + "categoryAssign.xml";
    var file = new File(impexPath);
    var fileWriter = new FileWriter(file, "UTF-8");
    var xsw = new XMLStreamWriter(fileWriter);

    /* The code below should write a XML similar to this onde:

<?xml version="1.0" encoding="UTF-8"?>
<catalog xmlns="http://www.demandware.com/xml/impex/catalog/2006-10-31" catalog-id="apparel-catalog">
	<category-assignment category-id="womens-clothing-tops" product-id="008884303989">
        <primary-flag>true</primary-flag>
    </category-assignment>
</catalog>

    */

    xsw.writeStartDocument("UTF-8", "1.0");
    xsw.writeStartElement("catalog");
    xsw.writeAttribute("xmlns", "http://www.demandware.com/xml/impex/catalog/2006-10-31");
    xsw.writeAttribute("catalog-id", "apparel-catalog");

    xsw.writeStartElement("category-assignment")
    xsw.writeAttribute()
    xsw.writeEndElement();


    xsw.writeEndElement();
    xsw.writeEndDocument();
    xsw.close();
    fileWriter.close();
};
