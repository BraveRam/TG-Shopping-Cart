class TelegramWebAppWrapper {
  constructor(telegramWebApp) {
    if (!telegramWebApp) {
      throw new Error("Telegram WebApp instance is required");
    }

    this.webApp = telegramWebApp;
  }

  // Show the main button
  showMainButton() {
    this.webApp.MainButton.show();
  }

  // Hide the main button
  hideMainButton() {
    this.webApp.MainButton.hide();
  }

  // Set text of the main button
  setMainButtonText(text) {
    this.webApp.MainButton.setText(text);
  }

  // Set color of the main button
  setMainButtonColor(color) {
    this.webApp.MainButton.setParams({ color });
  }

  // Set the background color of the web app
  setBackgroundColor(color) {
    this.webApp.setBackgroundColor(color);
  }

  // Close the web app
  close() {
    this.webApp.close();
  }

  // Show a confirm alert with text
  showConfirmAlert(message, callback) {
    this.webApp.showConfirm(message, callback);
  }

  // Send data to the parent app
  sendData(data) {
    this.webApp.sendData(data);
  }

  // Expand the web app to full screen
  expand() {
    this.webApp.expand();
  }
  
  initData(){
    return this.webApp.initData;
  }
  
  initDataUnSafe(){
    return this.webApp.initDataUnSafe;
  }

  // Enable closing confirmation
  enableClosingConfirmation() {
    this.webApp.enableClosingConfirmation();
  }

  // Disable closing confirmation
  disableClosingConfirmation() {
    this.webApp.disableClosingConfirmation();
  }

  // Ready event (should be called after app is ready)
  ready() {
    this.webApp.ready();
  }

  // Retrieve theme params
  getThemeParams() {
    return this.webApp.themeParams;
  }

  // Set header color
  setHeaderColor(color) {
    this.webApp.setHeaderColor(color);
  }

  // On event (listens for Telegram WebApp events)
  onEvent(eventType, callback) {
    this.webApp.onEvent(eventType, callback);
  }

  // Off event (removes event listeners)
  offEvent(eventType, callback) {
    this.webApp.offEvent(eventType, callback);
  }
  
  // Get the current viewport height
  getViewportHeight() {
    return this.webApp.viewportHeight;
  }

  // Get the current stable height
  getStableHeight() {
    return this.webApp.stableHeight;
  }
}

export default TelegramWebAppWrapper;