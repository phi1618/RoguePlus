/**
 * ゲーム起動処理
 */
(function(ns) {

    tm.main(function() {

        // アプリケーション作成
        ns.app = tm.app.CanvasApp("#world");
        ns.app.resize(ns.SCREEN_WIDTH, ns.SCREEN_HEIGHT); // 画面サイズに合わせる
        ns.app.fitWindow(); // リサイズ対応
        ns.app.background = "rgb(0, 0, 0)"; // 背景色をセット

        // デバッグ時のみ
        if (ns.QUERY_PARAM.stats == "true") {
            ns.app.enableStats();
        }

        var targetScene = ns[ns.QUERY_PARAM.scene] || ns.TitleScene;
        var assets = ASSET_MAP[ns.QUERY_PARAM.scene] || TITLE_ASSETS;

        // シーンの切り替え
        var loadingScene = ns.BarLoadingScene({
            width:      ns.app.width,
            height:     ns.app.height,
            assets:     assets,
            nextScene:  targetScene,
        });
        ns.app.replaceScene(loadingScene);

        // tmlibの実行
        ns.app.run();

    });

})(game);