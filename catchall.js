const mods = {
    'kpm': 'Nice try... in a perfect world we could trust people to install modules on a public demo chat, but this isn\'t a perfect world :(. Perhaps install a local copy and experiment there?',
    'shutdown': 'That would just ruin the fun for everyone :(',
    'restart': 'There shouldn\'t be any particular need to restart.',
    'update': 'This copy of Concierge should automatically be up to date (please tell us if it isn\'t).',
    'admin': 'Admin controls are restricted to admins, not general members of the public.'
};

const onMessage = (api, event) => {
    if (event.module_match_count !== 0) {
        return;
    }

    if (mods[event.arguments[0].substr(api.commandPrefix.length)]) {
        api.sendMessage(mods[event.arguments[0].substr(api.commandPrefix.length)], event.thread_id);
    }
    else {
        api.sendMessage('Hi there! This is a demo chat for Concierge.\nFor some example commands, try the "' + api.commandPrefix + 'help" command.', event.thread_id);
    }
};

exports.load = platform => platform.on('message', onMessage);
exports.unload = platform => platform.removeListener('message', onMessage);
