/* ===== Nishdan — الإعدادات المركزية =====
   عدّلي هنا فقط، وتتحدث كل الصفحات تلقائيًا. */
var SITE = {
  // رقم الواتساب بصيغة دولية بدون + أو أصفار، مثال: 33612345678
  whatsapp: "",

  // روابط Payhip لكل منتج
  payhip: {
    parasites:    "",
    fibromyalgia: "",
    immunity:     "",
    elderly:      "",
    sibo:         "",
    weight:       "",
    beauty:       "",
    child:        "",
    cooking:      ""
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var wa = SITE.whatsapp ? "https://wa.me/" + SITE.whatsapp : "#";
  document.querySelectorAll("[data-whatsapp]").forEach(function (a) { a.href = wa; });
  document.querySelectorAll("[data-payhip]").forEach(function (a) {
    a.href = SITE.payhip[a.getAttribute("data-payhip")] || "#";
  });
});
