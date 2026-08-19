const emojiOptions = [
  { emoji: '👍', label: 'thumbs up' },
  { emoji: '✓', label: 'check mark' },
  { emoji: '👀', label: 'eyes' },
  { emoji: '🙌', label: 'raised hands' },
  { emoji: '💡', label: 'light bulb' },
  { emoji: '📌', label: 'pushpin' },
];

export function mountEmojiPicker(picker: HTMLElement, textarea: HTMLTextAreaElement) {
  if (picker.dataset.mounted === 'true') return;

  const heading = document.createElement('p');
  heading.className = 'emoji-picker__label';
  heading.textContent = 'Add an emoji';
  picker.append(heading);

  const grid = document.createElement('div');
  grid.className = 'emoji-picker__grid';

  for (const option of emojiOptions) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'emoji-picker__option';
    button.textContent = option.emoji;
    button.setAttribute('aria-label', `Insert ${option.label}`);
    button.addEventListener('click', () => {
      const start = textarea.selectionStart ?? textarea.value.length;
      const end = textarea.selectionEnd ?? textarea.value.length;
      textarea.setRangeText(option.emoji, start, end, 'end');
      textarea.focus();
      picker.hidden = true;
    });
    grid.append(button);
  }

  picker.append(grid);
  picker.dataset.mounted = 'true';
}
