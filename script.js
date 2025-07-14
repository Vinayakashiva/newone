* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary-color: #1e40af;
  --primary-light: #3b82f6;
  --primary-dark: #1e3a8a;
  --secondary-color: #059669;
  --secondary-light: #10b981;
  --background: #f8fafc;
  --surface: #ffffff;
  --surface-hover: #f1f5f9;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  --border: #e2e8f0;
  --border-focus: #3b82f6;
  --success: #059669;
  --success-light: #d1fae5;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, var(--background) 0%, #e2e8f0 50%, var(--background) 100%);
  color: var(--text-primary);
  line-height: 1.6;
  font-size: 16px;
  min-height: 100vh;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  color: white;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="1" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.brand-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.brand-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.brand-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  font-weight: 300;
}

/* Main content */
.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  width: 100%;
}

.form-container {
  background: var(--surface);
  border-radius: 24px;
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  border: 1px solid var(--border);
}

.form-header {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%);
  padding: 2.5rem;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.form-header h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--text-secondary);
  font-size: 1.125rem;
}

/* Form styles */
.custom-form {
  padding: 2.5rem;
}

.section-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.section-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.section-icon {
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

label {
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

select, textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid var(--border);
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background: var(--surface);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

select:focus, textarea:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  transform: translateY(-1px);
}

select:hover, textarea:hover {
  border-color: var(--text-muted);
}

textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

textarea::placeholder {
  color: var(--text-muted);
  font-style: italic;
}

/* Form actions */
.form-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.submit-btn {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-light) 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 250px;
  justify-content: center;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(5, 150, 105, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

.btn-icon {
  font-size: 1.25rem;
}

/* Output section */
.output-section {
  margin-top: 3rem;
  background: var(--success-light);
  border: 1px solid var(--success);
  border-radius: 16px;
  padding: 2rem;
  display: none;
  animation: slideIn 0.5s ease;
}

.output-header h3 {
  color: var(--success);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.output-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  line-height: 1.8;document.getElementById("customForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const get = id => document.getElementById(id).value;

  // Get readable option text instead of values
  const getSelectText = id => {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].text;
  };

  const shirtData = {
    fit: getSelectText("shirtFit"),
    sleeve: getSelectText("shirtSleeve"),
    pocket: getSelectText("shirtPocket"),
    length: getSelectText("shirtLength")
  };

  const pantData = {
    fit: getSelectText("pantFit"),
    length: getSelectText("pantLength"),
    backPockets: getSelectText("pantBackPocket"),
    frontPockets: getSelectText("pantPocket")
  };

  const description = get("description").trim();

  const output = `
    <div class="summary-section">
      <strong>👕 Shirt Specifications</strong>
      <div class="spec-grid">
        <div class="spec-item">
          <span class="spec-label">Fit Type:</span>
          <span class="spec-value">${shirtData.fit}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Sleeve Length:</span>
          <span class="spec-value">${shirtData.sleeve}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Pocket Style:</span>
          <span class="spec-value">${shirtData.pocket}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Length:</span>
          <span class="spec-value">${shirtData.length}</span>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <strong>👖 Pant Specifications</strong>
      <div class="spec-grid">
        <div class="spec-item">
          <span class="spec-label">Fit Type:</span>
          <span class="spec-value">${pantData.fit}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Length:</span>
          <span class="spec-value">${pantData.length}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Back Pockets:</span>
          <span class="spec-value">${pantData.backPockets}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Front Pockets:</span>
          <span class="spec-value">${pantData.frontPockets}</span>
        </div>
      </div>
    </div>

    ${description ? `
    <div class="summary-section">
      <strong>📝 Special Instructions</strong>
      <div class="description-box">
        ${description}
      </div>
    </div>
    ` : ''}

    <div class="summary-footer">
      <p><strong>Order Status:</strong> Ready for Production</p>
      <p><strong>Estimated Delivery:</strong> 7-10 Business Days</p>
    </div>
  `;

  // Add CSS for the summary if not already added
  if (!document.getElementById('summary-styles')) {
    const style = document.createElement('style');
    style.id = 'summary-styles';
    style.textContent = `
      .summary-section {
        margin-bottom: 2rem;
      }
      
      .summary-section:last-child {
        margin-bottom: 0;
      }
      
      .spec-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }
      
      .spec-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;
        background: #f8fafc;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
      }
      
      .spec-label {
        font-weight: 500;
        color: #64748b;
        font-size: 0.875rem;
      }
      
      .spec-value {
        font-weight: 600;
        color: #1e293b;
      }
      
      .description-box {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1rem;
        font-style: italic;
        color: #475569;
      }
      
      .summary-footer {
        margin-top: 2rem;
        padding-top: 1.5rem;
        border-top: 2px solid #059669;
        text-align: center;
      }
      
      .summary-footer p {
        margin: 0.25rem 0;
        font-size: 0.875rem;
      }
      
      @media (max-width: 480px) {
        .spec-grid {
          grid-template-columns: 1fr;
        }
        
        .spec-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const outputSection = document.getElementById("outputSection");
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = output;
  outputSection.style.display = "block";

  // Smooth scroll to results
  outputSection.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  });

  // Show success notification
  showSuccessNotification();
});

function showSuccessNotification() {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
    z-index: 1000;
    font-weight: 500;
    animation: slideInNotification 0.3s ease;
  `;
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <span style="font-size: 1.25rem;">✅</span>
      <span>Customization saved successfully!</span>
    </div>
  `;

  // Add animation keyframes if not already added
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideInNotification {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOutNotification {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Remove notification after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutNotification 0.3s ease';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 4000);
}
}

.output-content strong {
  color: var(--text-primary);
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.output-content strong:first-child {
  margin-top: 0;
}

/* Footer */
.footer {
  background: linear-gradient(135deg, var(--text-primary) 0%, #334155 100%);
  color: white;
  padding: 2rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-content p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.footer-links {
  font-size: 0.875rem;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .header {
    padding: 2rem 1rem;
  }
  
  .brand-title {
    font-size: 2rem;
  }
  
  .brand-subtitle {
    font-size: 1rem;
  }
  
  .main-content {
    padding: 2rem 1rem;
  }
  
  .form-header {
    padding: 2rem 1.5rem;
  }
  
  .form-header h2 {
    font-size: 1.5rem;
  }
  
  .custom-form {
    padding: 1.5rem;
  }
  
  .section-card {
    padding: 1.5rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .submit-btn {
    width: 100%;
    max-width: none;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 0.25rem;
  }
}

@media (max-width: 480px) {
  .brand {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .brand-icon {
    font-size: 2rem;
  }
  
  .brand-title {
    font-size: 1.75rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .output-section {
    padding: 1.5rem;
  }
}