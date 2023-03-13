const prefix = '.openlooks';

function prefixer(css) {
  css.walkRules(processRule);
}

function processRule(rule) {
  rule.selectors = rule.selectors.map(addPrefix);
  // rule.selectors = rule.selectors.map((selector) => {
  //   if (!selector.includes(prefix)) {
  //     if (selector.startsWith('.')) {
  //       return prefix + selector;
  //     } else if (selector.includes('.')) {
  //       return selector + prefix;
  //     }
  //   }
  //   return selector;
  // });
}

function addPrefix(selector) {
  if (selector === ':root' || selector === 'to' || /\d%/.test(selector)) {
    return selector;
  }

  const parts = selector.split(' ');
  let applied = false;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith('.') && parts[i] !== '.dark') {
      parts[i] = prefix + parts[i];
      applied = true;
      break;
    }
  }
  if (!applied) {
    parts[parts.length - 1] += prefix;
  }
  return parts.join(' ');
}

function prefixerPlugin() {
  return prefixer;
}

export default prefixerPlugin;
