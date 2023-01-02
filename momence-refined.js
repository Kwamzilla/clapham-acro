// Initialize global variables
var pluginHost = 'https://www.momence.com';
var apiHost = 'https://api.momence.com';
var scheduleId;
var sessions = [];
var currentPage = 1;
var perPage = 6;
var totalPages = 1;

// Initialize DOM elements
var $schedule = $('#momence-plugin-host-schedule');
var $sessionList = $('#momence-host_schedule-session_list');
var $pagination = $('#momence-host_schedule-pagination');

// Get schedule ID from DOM
scheduleId = $schedule.data('schedule_id');

// Fetch session data from API
$.get(apiHost + '/v1/schedules/' + scheduleId + '/sessions', function(data) {
  // Store session data
  sessions = data.sessions;
  // Calculate total number of pages
  totalPages = Math.ceil(sessions.length / perPage);
  // Render current page of sessions
  renderSessions();
  // Render pagination
  renderPagination();
});

// Render current page of sessions
function renderSessions() {
  // Clear current session list
  $sessionList.html('');
  // Get index of first and last session to display on current page
  var startIndex = (currentPage - 1) * perPage;
  var endIndex = startIndex + perPage;
  // Loop through sessions and append to session list
  for (var i = startIndex; i < endIndex; i++) {
    var session = sessions[i];
    if (session) {
      // Create session DOM element
      var $session = $('<article>').addClass('momence-host_schedule-session_list-item').attr('data-session_id', session.id);
      // Append image
      var $imageContainer = $('<div>').addClass('momence-host_schedule-session_list-image_container');
      var $image = $('<img>').attr('src', session.image_url).addClass('momence-host_schedule-session_list-item-image');
      $imageContainer
