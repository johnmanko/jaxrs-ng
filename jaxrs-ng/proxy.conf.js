const PROXY_CONFIG = [
  /**
   * Forward REST API Requests
   */
  {
      context: [
          '**/api/**',
          '**/resources/**',
          '**/assets/**'
      ],
      target: 'http://localhost:8080',
      secure: false,
      proxyTimeout: 10 * 60000//10 minutes
  },
  /**
   * Forward all websocket requests
   */
  {
      context: [
          '**/ws/**'
      ],
      ws: true,
      target: 'http://localhost:8080'
  }
];

module.exports = PROXY_CONFIG;
