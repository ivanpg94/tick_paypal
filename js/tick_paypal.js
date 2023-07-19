var pedidos = drupalSettings.datos.tick_paypal;
if(pedidos == 'payment') {
  //console.log("hola linea5");
  let element = document.querySelector("#block-vartheme-claro-content > div > div > div.view-content > table > tbody > tr > td.views-field.views-field-state");
  //let element = document.querySelector("td.order-status-payment.views-field.views-field-state[headers='view-state-table-column']");
  let statename = element.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
  //console.log(statename);

  if (statename === "Pending") {
    //console.log(statename);
    element.innerHTML = "<img class=\"pending\" src=\"https://www.d7.mitortuga.es/sites/all/modules/commerce/modules/payment/theme/icon-pending.png\" alt=\"Pendiente\" title=\"Pendiente\"> Pendiente";
  }
  if (statename === "Completado") {
    //console.log(statename);
    element.innerHTML = "<img class=\"success\" src=\"https://www.d7.mitortuga.es/sites/all/modules/commerce/modules/payment/theme/icon-success.png\" alt=\"Éxito\" title=\"Éxito\"> Completado";
  }
  if (statename === "Capture denied") {
    //console.log(statename);
    element.innerHTML = "<img class=\"error\" src=\"https://www.d7.mitortuga.es/sites/all/modules/commerce/modules/payment/theme/icon-failure.png\" alt=\"Error\" title=\"Error\"> Fallo";
  }
  if (statename === "Authorization") {
    //console.log(statename);
    element.innerHTML = "<img class=\"error\" src=\"https://www.d7.mitortuga.es/sites/all/modules/commerce/modules/payment/theme/icon-pending.png\" alt=\"Error\" title=\"Error\"> Autorización";
  }
  if (statename === "Authorization (Voided)") {
    //console.log(statename);
    element.innerHTML = "<img class=\"error\" src=\"https://www.d7.mitortuga.es/sites/all/modules/commerce/modules/payment/theme/icon-failure.png\" alt=\"Error\" title=\"Error\"> Autorización Anulada";
  }
  if (statename === "Authorization (Expired)") {
    //console.log(statename);
    element.innerHTML = "<img class=\"error\" src=\"https://www.d7.mitortuga.es/sites/all/modules/commerce/modules/payment/theme/icon-failure.png\" alt=\"Error\" title=\"Error\"> Autorización Expirada";
  }
}
