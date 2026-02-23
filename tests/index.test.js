import { describe, it, expect } from 'vitest';
import { Linter } from 'eslint';
import config from '../index.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function lint(code, filename = 'test.js') {
  const linter = new Linter();
  return linter.verify(code, config, { filename });
}

function errorsFor(messages, ruleId) {
  return messages.filter(m => m.ruleId === ruleId && m.severity === 2);
}

function warningsFor(messages, ruleId) {
  return messages.filter(m => m.ruleId === ruleId && m.severity === 1);
}

// ---------------------------------------------------------------------------
// Config structure
// ---------------------------------------------------------------------------

describe('config structure', () => {
  it('exports a flat config array', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config.length).toBeGreaterThan(0);
  });

  it('registers all required plugins', () => {
    const entry = config.find(c => c.plugins);
    expect(entry).toBeDefined();
    expect(entry.plugins).toHaveProperty('react');
    expect(entry.plugins).toHaveProperty('react-hooks');
    expect(entry.plugins).toHaveProperty('import');
    expect(entry.plugins).toHaveProperty('jsx-a11y');
  });

  it('configures languageOptions for modern JS with JSX', () => {
    const entry = config.find(c => c.languageOptions);
    expect(entry).toBeDefined();
    expect(entry.languageOptions.ecmaVersion).toBe('latest');
    expect(entry.languageOptions.sourceType).toBe('module');
    expect(entry.languageOptions.parserOptions.ecmaFeatures.jsx).toBe(true);
  });

  it('includes a rules object', () => {
    const entry = config.find(c => c.rules);
    expect(entry).toBeDefined();
    expect(typeof entry.rules).toBe('object');
    expect(Object.keys(entry.rules).length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Base rules
// ---------------------------------------------------------------------------

describe('base rules', () => {
  it('enforces single quotes', () => {
    const msgs = lint('const x = "hello";\n');
    expect(errorsFor(msgs, 'quotes')).toHaveLength(1);
  });

  it('allows single quotes', () => {
    const msgs = lint("const x = 'hello';\n");
    expect(errorsFor(msgs, 'quotes')).toHaveLength(0);
  });

  it('enforces === over ==', () => {
    const msgs = lint('if (a == 1) {}\n');
    expect(errorsFor(msgs, 'eqeqeq')).toHaveLength(1);
  });

  it('warns on console.log', () => {
    const msgs = lint("console.log('test');\n");
    expect(warningsFor(msgs, 'no-console')).toHaveLength(1);
  });

  it('allows console.warn and console.error', () => {
    const msgs = lint("console.warn('x');\nconsole.error('y');\n");
    expect(warningsFor(msgs, 'no-console')).toHaveLength(0);
  });

  it('requires curly braces for all blocks', () => {
    const msgs = lint('if (a) x = 1;\n');
    expect(errorsFor(msgs, 'curly')).toHaveLength(1);
  });

  it('requires default case in switch', () => {
    const msgs = lint('switch (a) { case 1: break; }\n');
    expect(errorsFor(msgs, 'default-case')).toHaveLength(1);
  });

  it('warns on var declarations', () => {
    const msgs = lint('var x = 1;\n');
    expect(warningsFor(msgs, 'no-var')).toHaveLength(1);
  });

  it('disallows prototype builtins', () => {
    const msgs = lint('obj.hasOwnProperty("key");\n');
    expect(errorsFor(msgs, 'no-prototype-builtins')).toHaveLength(1);
  });
});

// ---------------------------------------------------------------------------
// React rules
// ---------------------------------------------------------------------------

describe('react rules', () => {
  it('flags unknown JSX props', () => {
    const msgs = lint('<div class="foo" />\n');
    expect(warningsFor(msgs, 'react/no-unknown-property')).toHaveLength(1);
  });

  it('allows valid JSX', () => {
    const msgs = lint('<div className="foo" />\n');
    expect(warningsFor(msgs, 'react/no-unknown-property')).toHaveLength(0);
  });
});
