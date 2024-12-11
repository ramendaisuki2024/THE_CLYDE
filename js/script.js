// ページトップパターン
// ある程度スクロール→フェードイン
// ある程度ってどのくらい？→スクロール位置を確認
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // scの箱の中身をconsoleに一旦表示させる（検証で確認する）↓重いので消す
  //   console.log(sc);
  // 条件分岐
  // 200px超えてスクロールしたらフェードイン
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

//モバイルメニュー
/* Aパターン開始 */
// .hmenuをクリックした時
$(".hmenu").click(function () {
  // →navにスライドトグル
  $("nav").slideToggle(500);
  // →$(this)にクラスcloseをトグル
  $(this).toggleClass("close");
});
/* Aパターンここまで */
