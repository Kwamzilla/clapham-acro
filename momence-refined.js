$(document).ready(function() {
  const hostId = '21671';
  const API_URL = `https://app.momence.com/api/v1/hosts/${hostId}/schedule?expand=session`;

  function getSchedule() {
    $.get(API_URL, function(data) {
      const schedule = data.items;

      schedule.forEach(function(item) {
        const startDate = new Date(item.start_date);
        const endDate = new Date(item.end_date);
        const startTime = startDate.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
        const endTime = endDate.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
        const day = startDate.toLocaleDateString('en-US', { weekday: 'long' });
        const month = startDate.toLocaleDateString('en-US', { month: 'long' });
        const date = startDate.toLocaleDateString('en-US', { day: 'numeric' });
        const sessionId = item.id;
        const sessionType = item.session.type;
        const sessionName = item.session.name;
        const sessionDescription = item.session.description;
        const sessionImage = item.session.image_url;
        const sessionTeacher = item.session.teacher.name;
        const sessionCapacity = item.session.capacity;
        const sessionAttendees = item.session.attendee_count;
        const sessionWaitlist = item.session.waitlist_count;
        const sessionStatus = item.session.status;
        const sessionLink = item.session.url;

        if (sessionType === 'class') {
$('#momence-plugin-host-schedule').append(
'<article class="momence-host_schedule-session_list-item" data-session_id="' +
           sessionId +
           '"><div class="momence-host_schedule-session_list-image_container"><img src="' +
           sessionImage +
           '" class="momence-host_schedule-session_list-item-image"></div><div class="momence-host_schedule-session_list-second-section"><div class="momence-host_schedule-session_list-section-header"><img src="' +
           sessionImage +
           '" class="momence-host_schedule-session_list-item-image"><div><h3 class="momence-host_schedule-session_list-item-type">Class</h3><h4 class="momence-host_schedule-session_list-item-title">' +
sessionName +
'</h4></div></div><div class="momence-host_schedule-session_list-item-info momence-session-teacher"><svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="momence-host_schedule-session_list-item-info-icon"><g clip-path="url(#icon-profile-filled_svg__clip0_220_27685)"><rect x="1" y="1" width="18" height="18" rx="9" fill="currentColor"></rect><circle cx="10" cy="7.75" r="3.15" fill="#fff"></circle><path d="M18.25 18.25a8.25 8.25 0 01-16.5 0c0-4.556 3.694-6 8.25-6s8.25 1.444 8.25 6z" fill="#fff"></path></g><rect x="1.9" y="1.9" width="16.2" height="16.2" rx="8.1" stroke="currentColor" stroke-width="1.8"></rect><defs><clipPath id="icon-profile-filled_svg__clip0'" class="momence-host_schedule-session_list-item-image"><div><h3 class="momence-host_schedule-session_list-item-type">Class</h3><h4 class="momence-host_schedule-session_list-item-title">' +
              sessionName +
              '</h4></div></div><div class="momence-host_schedule-session_list-item-info momence-session-teacher"><svg class="momence-host_schedule-session_list-item-info-icon"><use xlink:href="#icon-profile-filled"></use></svg><div class="momence-host_schedule-session_list-item-info-text">' +
              sessionTeacher +
              '</div></div><div class="momence-host_schedule-session_list-item-info momence-session-location"><svg class="momence-host_schedule-session_list-item-info-icon"><use xlink:href="#icon-location-filled"></use></svg><div class="momence-host_schedule-session_list-item-info-text">' +
              sessionLocation +
              '</div></div><div class="momence-host_schedule-session_list-item-info momence-session-time"><svg class="momence-host_schedule-session_list-item-info-icon"><use xlink:href="#icon-clock-filled"></use></svg><div class="momence-host_schedule-session_list-item-info-text">' +
              sessionDate +
              '</div></div><div class="momence-host_schedule-session_list-item-book-cta"><a href="' +
              sessionBookLink +
              '" target="_blank" class="momence-host_schedule-session_list-item-book-button">Book</a></div></article>'
          );
          } else if (sessionType === 'event') {
          $('#momence-plugin-host-schedule').append(
            '<article class="momence-host_schedule-session_list-item" data-session_id="' +
              sessionId +
              '"><div class="momence-host_schedule-session_list-image_container"><img src="' +
              sessionImage +
              '" class="momence-host_schedule-session_list-item-image"></div><div class="momence-host_schedule-session_list-second-section"><div class="momence-host_schedule-session_list-section-header"><img src="' +
              sessionImage +
              '" class="momence-host_schedule-session_list-item-image"><div><h3 class="momence-host_schedule-session_list-item-type">Event</h3><h4 class="momence-host_schedule-session_list-item-title">' +
              sessionTitle +
              '</h4></div></div>
