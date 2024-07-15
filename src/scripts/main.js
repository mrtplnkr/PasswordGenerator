const { buildCharacterSet, makePassword } = useGenerator();

function handleFormSubmit(event) {
  event.preventDefault();
  refreshPassword();
}

function refreshPassword() {
  const charOptions = buildCharacterSet(
    document.getElementById('chkUpper').checked,
    document.getElementById('chkLower').checked,
    document.getElementById('chkNumbers').checked,
    document.getElementById('chkSymbols').checked
  );
  const result = makePassword(charOptions);
  document.getElementById('passwordInput').value = result;
}