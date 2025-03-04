import { NextResponse } from "next/server";
import prisma from "@/lib/database";
import axios from "axios";


export async function POST(req: Request) {
  try {
    const { origin, destination, waypoints, departure_time, mode } = await req.json();
    const key = process.env.GOOGLE_MAPS_API_KEY;

    // Request to Google API
    // const googleApiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&waypoints=${waypoints}&departure_time=${departure_time}&mode=${mode}&key=${key}`;
    // console.log("google url", googleApiUrl)
    // try {
    //   const googleResponse = await axios.get(googleApiUrl);
    //   console.log("google response", googleResponse.data)
    // } catch (err) {
    //   console.log("error", err);
    // }

  // For Testing
    const googleResponse = {
      "geocoded_waypoints" : 
      [
         {
            "geocoder_status" : "OK",
            "place_id" : "EidTcGFuZGF1ZXIgU3RyLiA4LCAxMDE3OCBCZXJsaW4sIEdlcm1hbnkiGhIYChQKEgkJx4KS31GoRxH9wFYR1Ni9dRAI",
            "types" : 
            [
               "street_address"
            ]
         },
         {
            "geocoder_status" : "OK",
            "place_id" : "ChIJWVk_tFdRqEcR2Pb5ibtmnJg",
            "types" : 
            [
               "street_address"
            ]
         },
         {
            "geocoder_status" : "OK",
            "place_id" : "ChIJ_RCb9L1RqEcRSSVjajH5zjw",
            "types" : 
            [
               "car_rental",
               "establishment",
               "point_of_interest"
            ]
         },
         {
            "geocoder_status" : "OK",
            "place_id" : "ChIJN6ntXB9OqEcRFFktewfMp5A",
            "types" : 
            [
               "establishment",
               "point_of_interest"
            ]
         }
      ],
      "routes" : 
      [
         {
            "bounds" : 
            {
               "northeast" : 
               {
                  "lat" : 52.5297388,
                  "lng" : 13.4195996
               },
               "southwest" : 
               {
                  "lat" : 52.5145755,
                  "lng" : 13.3658645
               }
            },
            "copyrights" : "Powered by Google, ©2025 Google",
            "legs" : 
            [
               {
                  "distance" : 
                  {
                     "text" : "2.3 km",
                     "value" : 2314
                  },
                  "duration" : 
                  {
                     "text" : "7 mins",
                     "value" : 394
                  },
                  "end_address" : "Pariser Platz 8, 10117 Berlin, Germany",
                  "end_location" : 
                  {
                     "lat" : 52.5158764,
                     "lng" : 13.3774188
                  },
                  "start_address" : "Spandauer Str. 8, 10178 Berlin, Germany",
                  "start_location" : 
                  {
                     "lat" : 52.5200062,
                     "lng" : 13.4050129
                  },
                  "steps" : 
                  [
                     {
                        "distance" : 
                        {
                           "text" : "3 m",
                           "value" : 3
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 1
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5200306,
                           "lng" : 13.4049811
                        },
                        "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e on \u003cb\u003eSpandauer Str.\u003c/b\u003e toward \u003cb\u003eBundesstraße 5\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB2\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "ayp_IidypACD"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5200062,
                           "lng" : 13.4050129
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "1.4 km",
                           "value" : 1404
                        },
                        "duration" : 
                        {
                           "text" : "4 mins",
                           "value" : 222
                        },
                        "end_location" : 
                        {
                           "lat" : 52.51696829999999,
                           "lng" : 13.3857487
                        },
                        "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eBundesstraße 5\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB2\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow B2\u003c/div\u003e",
                        "maneuver" : "turn-left",
                        "polyline" : 
                        {
                           "points" : "eyp_IcdypAMNKPRd@j@nAVf@FNf@fAHJR\\DHLLFNFLFLJTDLBH@FDJLb@BJTt@J\\DPL^?BJ\\Jb@HVLd@DX^xA`@|A`@|ADRDZBP@V@^@R?DBv@DlABx@FrBBz@DrBBb@FzB@RDrA@\\FtBBpADx@?R@L?J?H?F?D?F?FAD?FAJAF?DAB?D?D?HAH@H?L?b@@h@Bn@BxADhAF|BHzC@x@FbB@z@B`A@d@L~E?DH~CDhA@j@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5200306,
                           "lng" : 13.4049811
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 170
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 40
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5154535,
                           "lng" : 13.386041
                        },
                        "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGlinkastraße\u003c/b\u003e",
                        "maneuver" : "turn-left",
                        "polyline" : 
                        {
                           "points" : "afp_I}kupAt@M^CNATCLCb@EJALAHALCPCTAJAZE"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.51696829999999,
                           "lng" : 13.3857487
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.6 km",
                           "value" : 589
                        },
                        "duration" : 
                        {
                           "text" : "2 mins",
                           "value" : 102
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5145755,
                           "lng" : 13.3774908
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBehrenstraße\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "q|o_IwmupABzABt@JjDDvA?N@LDxA?NBd@@ZBx@BpABdA@V@T@T@VHr@PzAPtA@LHl@@HBTJz@BXBN@NBN@R@L@\\@b@Bd@@t@FvB@^"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5154535,
                           "lng" : 13.386041
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.1 km",
                           "value" : 148
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 29
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5158764,
                           "lng" : 13.3774188
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eEbertstraße\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB2\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "cwo_IixspAQ@E@IAYASCg@Co@GSAC?G?I@I@I@C@EBIFCDED"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5145755,
                           "lng" : 13.3774908
                        },
                        "travel_mode" : "DRIVING"
                     }
                  ],
                  "traffic_speed_entry" : [],
                  "via_waypoint" : []
               },
               {
                  "distance" : 
                  {
                     "text" : "2.0 km",
                     "value" : 2020
                  },
                  "duration" : 
                  {
                     "text" : "7 mins",
                     "value" : 395
                  },
                  "end_address" : "Europaplatz 1, 10557 Berlin, Germany",
                  "end_location" : 
                  {
                     "lat" : 52.52499659999999,
                     "lng" : 13.3682047
                  },
                  "start_address" : "Pariser Platz 8, 10117 Berlin, Germany",
                  "start_location" : 
                  {
                     "lat" : 52.5158764,
                     "lng" : 13.3774188
                  },
                  "steps" : 
                  [
                     {
                        "distance" : 
                        {
                           "text" : "48 m",
                           "value" : 48
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 9
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5161642,
                           "lng" : 13.3769081
                        },
                        "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e on \u003cb\u003eEbertstraße\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB2\u003c/b\u003e toward \u003cb\u003eBundesstraße 5\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "g_p_I{wspAABCHCHCDCJ?BADCFCFEHIJKJ"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5158764,
                           "lng" : 13.3774188
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 192
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 53
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5177858,
                           "lng" : 13.3769679
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBundesstraße 5\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB2\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "_ap_IutspAWDIACAAACAECGCGIEEGKCGGGGIACCCIEGCC?AAA?CAC?C?K@E?E@MBC@OBKDIDE@G@k@Vk@R"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5161642,
                           "lng" : 13.3769081
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 237
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 65
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5180886,
                           "lng" : 13.380429
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBundesstraße 5\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB2\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "ekp_IauspAE]Ea@AQAEAMAU?SA_@Ce@C_AAg@GiBKqDA[A[Ca@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5177858,
                           "lng" : 13.3769679
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "91 m",
                           "value" : 91
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 22
                        },
                        "end_location" : 
                        {
                           "lat" : 52.51890419999999,
                           "lng" : 13.3802937
                        },
                        "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWilhelmstraße\u003c/b\u003e",
                        "maneuver" : "turn-left",
                        "polyline" : 
                        {
                           "points" : "amp_IujtpAQ@c@Dc@DM@[D]D"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5180886,
                           "lng" : 13.380429
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "74 m",
                           "value" : 74
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 13
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5195685,
                           "lng" : 13.3801923
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eMarschallbrücke\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "crp_IyitpAO@c@FE?C@c@DI@I?A?A?C?A?E?"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.51890419999999,
                           "lng" : 13.3802937
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 193
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 24
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5212939,
                           "lng" : 13.3798734
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eLuisenstraße\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "ivp_IeitpAG?A?C?A?A@Q@cAJA?s@Hu@Hi@DOBA?C@C@CBE@A?G@C?G@Q@M@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5195685,
                           "lng" : 13.3801923
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 204
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 29
                        },
                        "end_location" : 
                        {
                           "lat" : 52.52222339999999,
                           "lng" : 13.3773419
                        },
                        "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMargarete-Steffin-Straße\u003c/b\u003e",
                        "maneuver" : "turn-left",
                        "polyline" : 
                        {
                           "points" : "aaq_IegtpAKbAKz@QbA?@I^IZW|@GT?@MZWj@O^S^QX"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5212939,
                           "lng" : 13.3798734
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "61 m",
                           "value" : 61
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 14
                        },
                        "end_location" : 
                        {
                           "lat" : 52.52207569999999,
                           "lng" : 13.3764765
                        },
                        "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eReinhardtstraße\u003c/b\u003e",
                        "maneuver" : "turn-left",
                        "polyline" : 
                        {
                           "points" : "{fq_IkwspABZBLFn@@F?D@H@NDh@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.52222339999999,
                           "lng" : 13.3773419
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 241
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 36
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5233998,
                           "lng" : 13.3737593
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKapelle-Ufer\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "_fq_I_rspAUNQREFILSZc@|@[l@Sh@CFGPGLSn@IZOn@IZG^CPCHCVG^"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.52207569999999,
                           "lng" : 13.3764765
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 210
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 24
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5234215,
                           "lng" : 13.3707104
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eHugo-Preuß-Brücke\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "gnq_I_aspAAJADAD?DAF?@ShDAN?NAR?D?^?B?b@@R?V?@?N@N@X@\\Dp@Hx@@N?D@D"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5233998,
                           "lng" : 13.3737593
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 192
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 33
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5225227,
                           "lng" : 13.3683139
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eRahel-Hirsch-Straße\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "knq_I}mrpAHl@Fd@@BDRF`@DRNl@@DJ^DNL\\JXBFBHJT@@HPJVHPDR@BDNBD@DBF"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5234215,
                           "lng" : 13.3707104
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.3 km",
                           "value" : 277
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 73
                        },
                        "end_location" : 
                        {
                           "lat" : 52.52499659999999,
                           "lng" : 13.3682047
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eElla-Trebe-Straße\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "whq_I}~qpAMFA?KBiB?Q?yA?u@AA@A??@A@AB]?y@?gA?_@@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5225227,
                           "lng" : 13.3683139
                        },
                        "travel_mode" : "DRIVING"
                     }
                  ],
                  "traffic_speed_entry" : [],
                  "via_waypoint" : []
               },
               {
                  "distance" : 
                  {
                     "text" : "5.1 km",
                     "value" : 5141
                  },
                  "duration" : 
                  {
                     "text" : "17 mins",
                     "value" : 1030
                  },
                  "end_address" : "virtuell - S+U Alexanderplatz (Dircksenstraße), 10178 Berlin, Germany",
                  "end_location" : 
                  {
                     "lat" : 52.5203733,
                     "lng" : 13.4133625
                  },
                  "start_address" : "Europaplatz 1, 10557 Berlin, Germany",
                  "start_location" : 
                  {
                     "lat" : 52.52499659999999,
                     "lng" : 13.3682047
                  },
                  "steps" : 
                  [
                     {
                        "distance" : 
                        {
                           "text" : "57 m",
                           "value" : 57
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 21
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5244825,
                           "lng" : 13.3682088
                        },
                        "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eElla-Trebe-Straße\u003c/b\u003e toward \u003cb\u003eAgnes-von-Zahn-Harnack-Straße\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "gxq_Ig~qpA^AfA?"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.52499659999999,
                           "lng" : 13.3682047
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 150
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 59
                        },
                        "end_location" : 
                        {
                           "lat" : 52.52392529999999,
                           "lng" : 13.366197
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAgnes-von-Zahn-Harnack-Straße\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "_uq_Ii~qpA@FDZBJ?BBL?DBL?@BLTzAv@nDF^"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5244825,
                           "lng" : 13.3682088
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.2 km",
                           "value" : 153
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 47
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5252646,
                           "lng" : 13.3658645
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eClara-Jaschke-Straße\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "qqq_IwqqpAS@[@_@?y@@[HE?K@M@OBIFKHMHON"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.52392529999999,
                           "lng" : 13.366197
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "1.0 km",
                           "value" : 1029
                        },
                        "duration" : 
                        {
                           "text" : "4 mins",
                           "value" : 228
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5294666,
                           "lng" : 13.3794014
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eInvalidenstraße\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "{yq_IsoqpAOq@QiAOs@e@yBI_@Mi@Ic@CKS{@COIa@S{@GYGWIe@?GSeA_@cBKc@CKOe@Oe@Oi@CKIWEUCKACG]Mm@YoAUkAMg@s@iDEUMq@Oq@Kk@Ic@ACIWCISu@WmA?AOm@Ki@IYMq@ESOs@]eBMs@E[CKAKAGCIG]COSaAMs@_@gBKc@M_@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5252646,
                           "lng" : 13.3658645
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.1 km",
                           "value" : 148
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 21
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5283957,
                           "lng" : 13.3806948
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHessische Str.\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "etr_IgdtpAv@aAd@q@j@q@^e@RWFKNQ"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5294666,
                           "lng" : 13.3794014
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.5 km",
                           "value" : 482
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 72
                        },
                        "end_location" : 
                        {
                           "lat" : 52.52714289999999,
                           "lng" : 13.3869709
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eHannoversche Str.\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "omr_IiltpAJKJMFI@A?ABEBIBK@I@KBMDUBG@EDIRWJOHQLONWBEDGDEDI@C@CBEBE@C@E@GDQH_@Fe@Fa@Lu@Js@D[D]L{@NeAHm@?I?GC[A_@GyAAIAm@ImAEmAGaB"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5283957,
                           "lng" : 13.3806948
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "2.0 km",
                           "value" : 2039
                        },
                        "duration" : 
                        {
                           "text" : "6 mins",
                           "value" : 352
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5269282,
                           "lng" : 13.4154304
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eTorstraße\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "ser_IqsupACa@Ks@Eg@]sCC[Ks@CS?CCMCUCQK}@EWOmAY}BKy@CWEYKw@E[AIAECK?GAEAOEUCSE]AOGa@Gq@?AGk@Ig@Gg@Gc@?ACUIi@Kk@Ik@Mu@o@gEIe@O}@CU{@sF?IAGAQCg@?A?OAGGyC?AO}GB[@I?IC{@?UEeAAo@?MC_@AYAS?EAi@ACGoCAu@Ce@A]?S?M@Q@YB[NwANwAD_@Ba@Fc@Fc@@O@GTiC\\kDFm@VkC?CV{B@QJ_AJs@LcABKHu@PyABQLuAFq@BMBSDWDUJe@Fc@FWh@yCb@_CBKPaAJe@DUJYPk@Xq@FMTe@LWRc@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.52714289999999,
                           "lng" : 13.3869709
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.3 km",
                           "value" : 345
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 70
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5251504,
                           "lng" : 13.4195996
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eMollstraße\u003c/b\u003e",
                        "polyline" : 
                        {
                           "points" : "idr_Ime{pA^o@\\y@JYL[JYL[H[HUJ]J]BKJY`@oABKDKDSLa@DOBOJa@DSDOJ_@H]Ro@h@eB"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5269282,
                           "lng" : 13.4154304
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.1 km",
                           "value" : 139
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 32
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5241,
                           "lng" : 13.4184955
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eOtto-Braun-Straße\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB2\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "eyq_Io_|pAt@x@jAnAx@|@LJFF"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5251504,
                           "lng" : 13.4195996
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.3 km",
                           "value" : 255
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 43
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5221925,
                           "lng" : 13.4164362
                        },
                        "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eB2\u003c/b\u003e",
                        "maneuver" : "turn-slight-right",
                        "polyline" : 
                        {
                           "points" : "srq_Isx{pAJVDHRVLLXXDDj@p@`BlBZd@LNFFHHFDHD@@JDFB@@FDHHHJDDDDLH"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5241,
                           "lng" : 13.4184955
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "0.3 km",
                           "value" : 301
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 59
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5200617,
                           "lng" : 13.4137438
                        },
                        "html_instructions" : "Continue onto \u003cb\u003eAlexanderstraße\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eB1\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow B1\u003c/div\u003e",
                        "polyline" : 
                        {
                           "points" : "ufq_Iwk{pANNNN^`@b@d@LPZ^bAhA^`@HHHJNNDDDFHHDFFHLPHLBFHLHPN^HNJVDHFNJZ"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5221925,
                           "lng" : 13.4164362
                        },
                        "travel_mode" : "DRIVING"
                     },
                     {
                        "distance" : 
                        {
                           "text" : "43 m",
                           "value" : 43
                        },
                        "duration" : 
                        {
                           "text" : "1 min",
                           "value" : 26
                        },
                        "end_location" : 
                        {
                           "lat" : 52.5203733,
                           "lng" : 13.4133625
                        },
                        "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDircksenstraße\u003c/b\u003e",
                        "maneuver" : "turn-right",
                        "polyline" : 
                        {
                           "points" : "kyp_I{zzpAY^GF[b@"
                        },
                        "start_location" : 
                        {
                           "lat" : 52.5200617,
                           "lng" : 13.4137438
                        },
                        "travel_mode" : "DRIVING"
                     }
                  ],
                  "traffic_speed_entry" : [],
                  "via_waypoint" : []
               }
            ],
            "overview_polyline" : 
            {
               "points" : "ayp_IidypAQTKPRd@bAvBn@vAp@`Ab@`AdAnD^rAh@zBhBhHHl@Bv@J~CT|If@fP@lAGx@DnDj@xUXjLFtBt@M^Cd@Ep@Ip@InAMXtKTtIHhCn@|Ff@pEHnANvF@^Q@O?eCQi@?]HUVOd@IXOTKJWDMCEC[W[e@WQKCY@g@Jc@NwAj@K_AG{@a@yNE}@u@FkBRwBRW?iEb@_AJOFe@DM@KbA]~Bk@zBm@~Ac@~@QXBZJ|@@LBXDh@UNWZ]h@_AjBWp@m@jBe@|BQlA[dF?nCDvAP`CT|Ab@vB`@rA^`A`@|@Pl@DLOFuBBkB?y@?CF_E@fBAFb@Fb@\\xB~@nEo@ByA@a@HYBOBIFYRONOq@a@}Bo@yCo@uCi@gCQ}@SmA_AyDm@sB_BuHwAcHUoAK[o@oCs@cDaAaFM{@c@yBm@{CYcAhDkEv@aAT[Le@Nw@f@w@~@{AJSR_Ah@qDh@{DH_AO_DYkHs@qGk@{EmBgOq@_GiB{LyAmJGkAIsDO_HDe@IaDGwBUqI@s@d@eFpAwMv@yHf@iEb@mD\\iDxBuL\\gBPo@j@}A\\s@`@{@|@iBr@kB`BoFz@gDrAsEhErER^X`@xA~A|BrCTV\\VTJ`@`@r@n@lBxB|ChDd@p@f@fAb@`AJZY^c@j@"
            },
            "summary" : "B2 and Behrenstraße",
            "warnings" : [],
            "waypoint_order" : 
            [
               0,
               1
            ]
         }
      ],
      "status" : "OK"
   }


    const data = await googleResponse;
    if (data.status !== "OK") {
      return NextResponse.json(
        { success: false, error:  "Failed to fetch route prediction" },
        { status: 500 }
      );
    }

    const prediction = "Unknown time";
    const randomTime = new Date(Date.now() + Math.floor(Math.random() * 1000000000));


    // This section to add request to DB
    // let newRequest = {}
    // try {
    //   newRequest = await prisma.routeRequest.create({
    //     data: {
    //       origin,
    //       destination,
    //       departureTime: randomTime,
    //       mode,
    //       prediction,
    //     },
    //   });

    //   console.log("new Request", newRequest);
    // } catch (err) {
    //   console.log("data not saved",err)
    // }

    return NextResponse.json({ success: true ,googleResponse});
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}

