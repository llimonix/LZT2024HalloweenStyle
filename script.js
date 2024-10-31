// ==UserScript==
// @name         2024Halloween Style
// @namespace    ....
// @version      1
// @description  Возвращаем вайб хэллоуина
// @author       llimonix
// @match        https://lolz.live/*
// @match        https://lolz.guru/*
// @match        https://zelenka.guru/*
// @match        https://lzt.market/*
// @icon         https://lolz.live/public/2017/halloween.png
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`body {
	background: #141414;
}

#ChosenContent>input.loading {
	background: linear-gradient(105deg, rgb(36, 36, 36) 8%, rgb(52, 52, 52) 18%, rgb(36, 36, 36) 33%);
}

li.noMatterOption {
	border-bottom: 1px solid rgb(36,36,36)
}

.chosen-container {
	background: rgb(36, 36, 36);
}

.chosen-container .chosen-drop {
	background: rgb(36, 36, 36);
}

.chosen-container-single .chosen-search input[type="text"] {
	border: 1px solid rgb(36, 36, 36);
	background: rgb(36, 36, 36);
}

.chosen-container .chosen-results li.highlighted {
	background-color: rgb(36, 36, 36)
}

.chosen-container .chosen-results li.no-results {
	background: rgb(36, 36, 36)
}

.chosen-container .chosen-results li.group-result {
	background: rgb(36, 36, 36);
}

.chosen-responsive {
	background: rgb(36, 36, 36);
}

.chosen-responsive>#ChosenHeader {
	background: rgb(36, 36, 36);
	border-color: rgb(36, 36, 36);
}

.chosen-responsive>#ChosenContent>.search {
	border: 1px solid rgb(36, 36, 36);
}

.chosen-responsive > #ChosenContent li {
	border-color: rgb(36, 36, 36);
}

.Menu.tagMenu .blockLinksList.border-top {
	border-top: 1px solid rgb(36, 36, 36)
}

.itemTags.Popup, .itemTags .setTag,.singleTag.setTag {
	background: rgb(36,36,36)
}

.bbCodeSpoilerContainer {
	background: rgb(36, 36, 36);
}

.bbCodeHide.bbCodeQuote:not(.noQuote) {
	border: 5px solid rgb(36, 36, 36);
}

.bbCodeBlock .type {
	background-color: rgb(36, 36, 36);
}

.bbCodeBlock pre, .bbCodeBlock .code {
	background-color: rgb(36, 36, 36);
}

.bbCodeQuote .attribution {
	background-color: rgb(36, 36, 36);
}

.bbCodeSpoilerButton.button {
	background: rgb(36,36,36)
}

.hasJs .bbCodeSpoilerText {
	background: rgb(28, 28, 28);
}

.quoteIcon {
	border-right: 11px solid rgb(36, 36, 36);
}

.market_index .UpdateFeedButtonIcon {
	background: rgb(28, 28, 28);
}

.OrderByContainer label.selected {
	background: rgb(36,36,36);
}

#descriptionEditor,#informationEditor {
	border: 1px solid rgb(36, 36, 36);
}

.depositProblemButton:hover {
	background: rgb(36, 36, 36) radial-gradient(circle, transparent 1%, rgb(36, 36, 36) 1%) center/15000%
}


.AfterPurchaseContainer .accountCookies {
	background: rgb(36, 36, 36);
}

.market_item_view .block {
	background-color: rgb(28, 28, 28);
}

.marketMyPayments .item .statusIcon .api {
	border: 2px solid rgb(28, 28, 28);
}

.sponsoredMessage {
	background: rgb(36, 36, 36);
}

.marketMyPayments .awaitingStatusBox {
	background: rgb(36, 36, 36);
}

.inlineAutoValidator {
border: 1px solid rgb(36, 36, 36);
}

.searchBarForm--Filter .wrapper {
	background: rgb(36, 36, 36);
}

.wrapper .textCtrl {
	background: rgb(28, 28, 28)
}

.searchBarForm--Filter .wrapper .radio-group {
	background: rgb(28, 28, 28)
}

.searchBarForm .viewedItemsHider {
	background: rgb(36,36,36);
}

.Menu .menuHeader {
	border-bottom: 1px solid rgb(36,36,36)
}

.SavedSearchesList {
	background: rgb(28, 28, 28);
}

.searchLinksContainer .searchHistoryContainer {
	background: rgb(28,28,28);
}

.searchHistoryContainer.SearchHistoryList {
	background: rgb(28,28,28);
}

.categoryLinks .link {
	background: rgb(28, 28, 28);
}

.transactionList {
	background: rgb(36, 36, 36);
}

.hasJs.NoTouch .searchBarForm select {
	color: rgb(36,36,36)
}

.InstantLoadSelect .tabs {
	background: rgb(36, 36, 36);
}

.marketItemView--loginData--box {
	background: rgb(36, 36, 36);
}

.dateRangePickerDiv {
	background: rgb(36, 36, 36);
}

.marketItemView--title .titleBar {
	background: rgb(28, 28, 28);
}

.market--userPaymentsFilter {
	background: rgb(28, 28, 28);
}

.priceBadge.dark {
	background: rgb(36,36,36);
}

.blockLinksList.categoryList a, .selectCategoryContainer .chosen-container .chosen-results>li {
	border-bottom: 1px solid rgb(36, 36, 36)
}

.searchBarContainer {
	background: rgb(28, 28, 28);
}

.searchBarForm--orderByRadioContainer label:hover {
	border-color: rgb(36,36,36)
}

.marketContainer {
	background: rgb(28,28,28)
}

.market--titleBar {
	background: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36, 36, 36);
}

.marketUserPanel .balanceRow {
	border-bottom: 1px solid rgb(36, 36, 36);
}

.marketCloudContainer {
	background: rgb(28,28,28);
}

.marketItemView--underContent {
	border-top: 1px solid rgb(36, 36, 36);
}

.marketSidebarMenu {
	background: rgb(28, 28, 28)
}

.sidebarSpoilerContent {
	border-bottom: 1px solid rgb(36, 36, 36)
}

.marketSidebarMenu a:hover, .marketSidebarMenu a.selected {
	background: rgb(36,36,36);
}

.marketExtraSidebarMenu {
	border-top: 1px solid rgb(36,36,36)
}

.marketItemView--status.ban,.marketItemView--status.unbanned {
	background: rgb(36, 36, 36)
}

.marketItemView--Description {
	border-top: 1px solid rgb(36, 36, 36);
}

.marketIndexItem {
	background: rgb(28,28,28);
}

.marketIndexItem-Badge {
	background: rgb(36, 36, 36);
}

.market--container {
	background: rgb(28, 28, 28);
}

.marketHeader--Link {
	background: rgb(36,36,36)
}

.marketHeader--Link:not(.marketHeader--CatLink):hover {
	background: rgb(28,28,28);
}

.marketSidebarItems--Header,.marketSidebarItems--Body {
	background: rgb(28,28,28);
}

.marketSidebarItems--Header {
	border-bottom: 1px solid rgb(36,36,36)
}

.marketSidebarItem {
	border-bottom: 1px solid rgb(36, 36, 36);
}

.marketItemView--sameItem.current {
	background: rgb(36,36,36)
}

.marketFb--Item {

	border-bottom: 1px solid rgb(36, 36, 36)

}

.marketMyPayments {
	background: rgb(28, 28, 28);
}

.marketMyPayments .wrapper .item {
	border-bottom: 1px solid rgb(36, 36, 36);
}

.marketMyPayments .wrapper .item .Popup:hover {
	background: rgb(36, 36, 36)
}

.marketMyPayments .item .statusIcon {
	background: rgb(36, 36, 36);
}

.marketMyPayments .item .comment {
	background: rgb(36, 36, 36);
}

.marketMyPayments .item .comment .commentSvg {
	fill: rgb(36, 36, 36)
}

.marketSidebarItem .marketIndexItem-Badge:not(.Exf).not(.PlusXGamesLabel) {
	background: rgb(36, 36, 36);
}

.searchBarForm--searchHistoryContainer .item {
	background: rgb(28, 28, 28);
}

.searchBarForm--searchHistory {
	background: rgb(28,28,28);
}

.searchBarForm--searchHistory:hover {
	background: rgb(28, 28, 28);
}

.button-last-search:hover {
	background: rgb(28,28,28)
}

.blockLinksList label.deferredModGroup:hover, .blockLinksList label.deferredModGroup:focus {
	background: rgb(28, 28, 28) !important
}

.csMapContainer {
	background: rgb(36, 36, 36);
}

.searchHistoryContainer:last-child {
	background: rgb(28, 28, 28);
}

.MarketScrollResizer {
	border-bottom: 5px solid rgb(36, 36, 36);
}

.market_title_page_categoryIcon {
	background-color: rgb(28,28,28);
}

.cd-top:hover {
	background-color: rgb(28,28,28)
}

.primaryContent,.secondaryContent {
	background: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36,36,36)
}

.xenTooltip.dark {
	background: rgb(28,28,28)
}

.xenTooltip.statusTip .arrow {
	border-right-color: rgb(36, 36, 36);
}

.xenPreviewTooltip {
	border: 1px solid rgb(36, 36, 36);
}

.xenPreviewTooltip .arrow {
	border-top: 10px solid rgb(36, 36, 36);
}

.importantMessage {
	border-top: 1px solid rgb(36, 36, 36);
	border-bottom: 1px solid rgb(36, 36, 36)
}

.sectionMain {
	background-color: rgb(28, 28, 28);
}

.tabs {
	background: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36, 36, 36);
}

.tabs li:not(.active):hover {
	box-shadow: inset 0px -2px 0px 0px rgb(36, 36, 36)
}

.Menu {
	border: 1px solid rgb(36, 36, 36);
	background: rgb(28, 28, 28);
}

.unread-message {
	background: rgb(36, 36, 36);
}

.Menu .secondaryContent {
	background-color: rgb(28, 28, 28);
}

.Menu .sectionFooter {
	border-top: 1px solid rgb(36, 36, 36);
	background: rgb(28, 28, 28);
}

.formPopup {
	background-color: rgb(28, 28, 28)
}

.formPopup .secondaryControls {
	background: rgb(28, 28, 28);
}

#ConversationsMenu:before,#AlertsMenu:before {
	border-bottom: 9px solid rgb(36, 36, 36);
}

.xenOverlay .formOverlay {
	background-color: rgb(28, 28, 28);
}

.Touch .xenOverlay .formOverlay {
	background: rgb(28, 28, 28)
}

.xenOverlay>.section,.xenOverlay>.sectionMain {
	background: rgb(28, 28, 28);
}

.xenOverlay .section .subHeading, .xenOverlay .sectionMain .subHeading {
	background: rgb(36, 36, 36);
}

.xenOverlay.timedMessage .content {
	background-color: rgb(36, 36, 36);
	border: 2px solid rgb(36, 36, 36);
}

.liveAlerts {
	background: rgb(28, 28, 28);
	border: 1px solid rgb(36, 36, 36);
}

.liveAlerts .DismissCtrl:hover {
	background: rgb(28, 28, 28)
}

.liveAlert {
	border-bottom: 1px solid rgb(36, 36, 36);
}

#wideAlerts .listItem {
	border-bottom: 1px solid rgb(36, 36, 36)
}

.alertAction:not(.from_admin):not(.alerts):not(.upgrade_end):not(.renewal_is_coming)::before {
	border: 1px solid rgb(28,28,28);
}

.dataTable tr.dataRow td {
	border-bottom: 1px solid rgb(36, 36, 36);
}

.blockLinksList a:hover, .blockLinksList a:focus, .blockLinksList li.kbSelect a, .blockLinksList label:hover, .blockLinksList label:focus, .blockLinksList li.kbSelect label {
	background: rgb(36, 36, 36);
}

.xenOverlay .errorOverlay {
	background: rgb(28, 28, 28);
}

.errorPanel {
	background: rgb(28, 28, 28);
}

.bbCodeImageFullSize {
	background-color: rgb(28,28,28)
}

.forum_view .titleBar, .forum_list .titleBar {
	background: rgb(28, 28, 28);
}

.selectForumOverlay.xenOverlay {
	background: rgb(28, 28, 28);
}

.nodeList .node.current > .nodeInfo > .nodeText > .nodeTitle > a, .nodeList .node .current>div>.nodeTitle>a {
	background: rgb(36, 36, 36);
}

.node .nodeText h3.nodeTitle:hover {
	background: rgb(36, 36, 36);
}

.node h3.nodeTitle>a:hover {
	background: rgb(36, 36, 36);
}

.bbCodeBlock--unfurl {
	background: rgb(36, 36, 36);
}

.userChangeLogs {
	background: rgb(28, 28, 28)
}

.actionButton--sendMoney.disabled {
	background-color: rgb(36,36,36)
}

.textCtrl.light {
	background: rgb(36,36,36)
}

.textCtrl {
	background-color: rgb(45, 45, 4536, 36, 36);
}

input.textCtrl.disabled, textarea.textCtrl.disabled, .disabled .textCtrl {
	background-color: rgb(36,36,36)
}

.button {
	background-color: rgb(36, 36, 36);
}

.button.dark {
	background-color: rgb(28, 28, 28)
}

input.button.disabled, a.button.disabled, span.button.disabled, input.button.primary.disabled, a.button.primary.disabled, span.button.primary.disabled, html .buttonProxy .button.disabled,button.button.disabled,button.button.primary.disabled,.button:disabled {
	background-color: rgb(36,36,36);
}

.button:disabled:active {
	background: rgb(36,36,36)
}

.button:disabled:hover {
	background: rgb(36, 36, 36)
}

button.disabled:hover, span.button.disabled:hover, input.button.primary.disabled:hover, a.button.primary.disabled:hover, span.button.primary.disabled:hover, html .buttonProxy .button.disabled:hover,button.button.disabled,button.button.disabled,button.button.primary.disabled {
	background-color: rgb(36, 36, 36);
}

button.disabled:active, span.button.disabled:hover, input.button.primary.disabled:hover, a.button.primary.disabled:hover, span.button.primary.disabled:hover, html .buttonProxy .button.disabled:hover,button.button.disabled,button.button.primary.disabled {
	background: rgb(36,36,36)
}

.button:hover {
	background: rgb(36, 36, 36) radial-gradient(circle, transparent 1%, rgb(36, 36, 36) 1%) center/15000%
}

.button:not(.disabled):active {
	background-color: rgb(36, 36, 36);
}

.button.noAction:hover {
	background: rgb(36,36,36);
}

.settings_line {
	border-bottom: 1px solid rgb(36,36,36)
}

#calroot {
	background-color: rgb(28, 28, 28);
}

ul.autoCompleteList {
	background: rgb(36, 36, 36);
}

ul.autoCompleteList li:hover, ul.autoCompleteList li.selected {
	background: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36, 36, 36)
}

#header {
	background-color: rgb(28,28,28);
}

#visitorInfo {
	border: 1px solid rgb(36, 36, 36);
	color: rgb(36, 36, 36)
}

#visitorInfo .username {
	color: rgb(36,36,36);
}

#alerts .label {
	color: rgb(36,36,36)
}

.links-seo>a,.links-seo>a[href]:hover {
	color: rgb(36,36,36)
}

.links-seo {
	color: rgb(36, 36, 36)
}

.sub-forums {
	background: rgb(28,28,28);
}

.navPopup .alertsTabsWrapper {
	border-bottom: 1px solid rgb(36, 36, 36)
}

.rightLanguageSwitcher .languageSwitcher:hover {
	background: rgb(36, 36, 36);
}

.account-menu-sep {
	background: rgb(36, 36, 36);
}

.navigation-header {
	background: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36, 36, 36)
}

.menu-icon {
	border-bottom: 10px solid rgb(36, 36, 36);
}

#lzt-logo {
	background-size: 103%;
	width: 93px;
	background-image: url(/public/2017/halloween.png)
}

.navTabs .navTab.PopupClosed .navLink:hover {
	background: rgb(36, 36, 36);
}

.navTabs .navTab.PopupOpen .navLink .itemCount {
	border: 2px solid rgb(36, 36, 36)
}

.navTabs .navTab.PopupClosed .navLink:hover .itemCount {
	border: 2px solid rgb(36, 36, 36)
}

.navTabs .navTab.PopupOpen .navLink {
	background-color: rgb(36, 36, 36)
}

.navTabs .navLink .itemCount {
border: 2px solid rgb(36,36,36);
}

.navPopup .listItem.PopupItemLink:hover {
	background: rgb(36, 36, 36)
}

.navPopup .listItem.unread {
	background-color: rgb(36, 36, 36)
}

.navPopup .listItem {
	border-bottom: 1px solid rgb(36, 36, 36)
}

.QuickSearch .searchButton {
	border-bottom: 1px solid rgb(36, 36, 36);
}

.QuickSearch .searchButton:hover {
	background: rgb(36, 36, 36)
}

.liveHeaderResult--member:hover {
	background: rgb(36,36,36)
}

input[type="radio"]:disabled:after,input[type="checkbox"]:disabled:after {
	border-color: rgb(36,36,36)
}

 input[type="radio"]:after {
	border-color: rgb(36,36,36);
}

input[type="radio"]:checked:after {
	border-color: rgb(36,36,36)
}

.sidebar .sidebarWrapper {
	background: rgb(28, 28, 28);
}

.monthMaecenas--quote {
	background: rgb(36, 36, 36);
}

.monthMaecenas--quote:before {
	border-bottom: 10px solid rgb(36,36,36)
}

.sidebar .section .secondaryContent .footnote, .sidebar .section .secondaryContent .minorHeading {
	border-top: 1px solid rgb(36, 36, 36)
}

@media (max-width: 1024px) {
	.Responsive .sidebar .sidebarWrapper {
		background: rgb(28, 28, 28);
	}
}

.pageNavLinkGroup {
	background-color: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36,36,36);
}

.tagList .tag:hover {
	background-color: rgb(36, 36, 36)
}

.prefix.contest {
	background: rgb(36,36,36);
}

.tippy-tooltip.popup-theme {
	border: 1px solid rgb(36, 36, 36);
	background: rgb(28, 28, 28)
}

.tippy-popper[x-placement^=top] .popup-theme .tippy-arrow {
	border-top-color: rgb(36, 36, 36)
}

.tippy-popper[x-placement^=bottom] .tippy-tooltip.popup-theme .tippy-arrow {
	border-bottom-color: rgb(36, 36, 36)
}

.tippy-popper[x-placement^=left] .tippy-tooltip.popup-theme .tippy-arrow {
	border-left-color: rgb(36, 36, 36)
}

.tippy-popper[x-placement^=right] .tippy-tooltip.popup-theme .tippy-arrow {
	border-right-color: rgb(36, 36, 36)
}

.checkboxLikeButton {
	background: rgb(36,36,36);
}

.radio-group.dark input[type=radio]:checked+label {
	background: rgb(36, 36, 36)
}

.radio-group.buttonStyle label {
	background: rgb(36, 36, 36);
}

.radio-group.buttonStyle label:hover {
	background: rgb(36, 36, 36);
}

.contact.dark {
	border-color: rgb(36,36,36)
}

.checkUserContactsNotice {
	background: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36, 36, 36);
}

.simpleRedactor--smiliesBox .Smilie:hover, .simpleRedactor--smiliesBox .smilie:hover {
	background: rgb(36, 36, 36)
}

.simpleRedactor--smiliesBox .smilieContainer {
	background: rgb(28, 28, 28)
}

.bcont {
	background: rgb(28,28,28)
}

#adblock_dont_block_please {
	background: rgb(28, 28, 28);
}

#info {
	background: rgb(28, 28, 28)
}

#arbitrage-alert {
	background: rgb(28, 28, 28);
}

.hiddenLinkNotice {
	background: rgb(36, 36, 36);
}

div.qtip {
	border: 1px solid rgb(36, 36, 36);
	background-color: rgb(36, 36, 36);
}

.prefixGroups {
	background: rgb(28, 28, 28);
}

.dottesStyle.buttonStyle {
	background-color: rgb(36,36,36);
}

#content.message_page .titleBar, #content.error .titleBar, #content.market_error_page .titleBar, .webmoney_payment_page .titleBar, .register_process .titleBar, .login_two_step .titleBar,.cachify.titleBar {
	background: rgb(28, 28, 28);
	border-bottom: 1px solid rgb(36, 36, 36);
}

.alertNotice {
	background: rgb(28,28,28);
}

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus textarea:-webkit-autofill, textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus {
	-webkit-box-shadow: inset 0 0 0 50px rgb(36, 36, 36) !important;
	border: 2px solid rgb(36, 36, 36) !important
}

.tc_lppp_profile_post_poll_edit {
	background: rgb(28, 28, 28);
}

.conversationItem .tc-lucmc-unreadCounter {
	border: 2px solid rgb(36, 36, 36);
}

.navigationSideBar>ul {
	background: rgb(28, 28, 28);
}

.navigationSideBar a:hover {
	background: rgb(36, 36, 36);
}

.navigationSideBar a.selected {
	background: rgb(36, 36, 36);
}

.changeIgnoreParamLabel {
	background: rgb(36, 36, 36);
}

.manageNotifyButton:hover {
	background: rgb(36,36,36)
}

 .mainContentBlock .xenForm .ctrlUnit {
	border-bottom: 1px solid rgb(36, 36, 36);
}

.secret_answer_notice {
	background: rgb(36, 36, 36)
}

.titleBlock-lzt {
	border-bottom: 1px solid rgb(36,36,36)
}

.titleBlock-acc {
	border-bottom: 1px solid rgb(36, 36, 36);
}

.mm-ocd__content {
	background: rgb(28, 28, 28) !important
}`);
