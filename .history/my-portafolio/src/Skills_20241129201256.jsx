import React from 'react';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <strong>HTML:</strong> 
          <progress max="100" value="90"></progress>
        </li>
        <li>
          <strong>CSS:</strong> 
          <progress max="100" value="80"></progress>
        </li>
        <li>
          <strong>JavaScript:</strong> 
          <progress max="100" value="75"></progress>
        </li>
        <li>
          <strong>React:</strong> 
          <progress max="100" value="70"></progress>
        </li>
      </ul>
    </section>
  );
}
