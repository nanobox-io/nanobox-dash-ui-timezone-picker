component = require 'jade/component'

class TimezonePicker

  #
  constructor: ($el, @options) ->

    # missing path
    if !@options.path then console.error "Missing /path/to timezone data!";

    #
    timezoneJS.timezone.zoneFileBasePath = "#{@options.path}/tz/";
    timezoneJS.timezone.init()

    #
    @$node = $(component())
    $el.append @$node

    #
    noop = () -> console.warn "No callback provided"
    @onReady = @options.onReady || noop
    @onHover = @options.onHover || noop
    @onSelected = @options.onSelected || noop

    # add svg icons
    castShadows($(".shadow-parent"))

  #
  build : () ->

    #
    @tzp = @$node.find("#zonepicker")

    # there is a known issue with the map api, where when it starts display:none
    # it renders weird... this will fix it if needed, however, we're only rendering
    # this view if the timezone of 'optModel' != UTC, so this is not needed atm.
    # google.maps.event.trigger(@tzp, 'resize')

    # missing timezone
    if !timezone = @options.timezone then console.warn "Missing timezone. Setting timezone to 'UTC'"; timezone = "UTC"

    #
    @tzp.timezonePicker
      jsonRootUrl: "#{@options.path}/tz_json/"
      mapOptions:
        zoom: 2
        maxZoom: 5
        minZoom: 2
        centerLat: 0
        centerLng: 0
        panControl: false
        mapTypeControl: false
        streetViewControl: false

      #
      onReady: => @tzp.timezonePicker('selectZone', timezone); @onReady()
      onHover: (utcOffset, tzNames) => @onHover(utcOffset, tzNames)
      onSelected : (olsonName, utcOffset, tzName) =>
        tz_time = moment()
        tz_time.milliseconds(tz_time.milliseconds() - (tz_time.utcOffset() - utcOffset) * 60 * 1000)

        #
        @$node.find(".timezone").html("#{olsonName} - #{new timezoneJS.Date(olsonName).getTimezoneAbbreviation()}")
        @$node.find(".timezone-time").html(tz_time.format("hh:mm a"))

        #
        @onSelected(olsonName, utcOffset, tzName)

#
window.nanobox ||= {}
nanobox.TimezonePicker = TimezonePicker
