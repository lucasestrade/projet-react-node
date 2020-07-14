const providers = {
    phone : {
        MAX_WIDTH: 500
    },
    svg : {
        MAIN_LOGO : `M1027 4736 c-95 -35 -151 -112 -151 -206 1 -87 43 -153 124 -196 31
       -17 66 -20 300 -24 295 -6 297 -6 361 -77 19 -21 40 -52 47 -68 17 -40 840
       -2929 836 -2934 -1 -1 -38 -9 -81 -17 -208 -36 -385 -195 -438 -395 -20 -73
       -19 -222 1 -290 43 -145 152 -276 284 -341 93 -46 143 -57 245 -58 157 0 292
       57 399 170 130 138 177 304 139 493 l-5 27 887 0 887 0 -9 -33 c-4 -17 -8 -75
       -7 -127 0 -120 26 -201 94 -298 113 -161 282 -241 487 -230 142 8 249 57 356
       163 95 94 146 211 154 350 16 262 -144 482 -407 562 -50 16 -167 18 -1305 20
       l-1250 4 -61 207 c-34 114 -59 210 -57 215 2 4 577 7 1276 7 866 0 1284 3
       1310 11 46 12 109 67 130 112 24 51 628 2216 634 2273 11 107 -67 209 -178
       233 -35 8 -643 11 -1973 11 l-1923 0 -38 75 c-82 162 -219 278 -400 342 -79
       27 -83 27 -355 30 -215 2 -283 0 -313 -11z m3012 -821 c106 -149 171 -304 171
       -409 0 -30 -11 -80 -26 -121 -90 -244 -126 -385 -143 -554 -11 -106 -26 -131
       -76 -131 -50 0 -66 27 -76 125 -17 167 -53 310 -138 545 -17 47 -31 104 -31
       128 0 70 28 174 70 256 47 91 157 246 175 246 7 0 40 -38 74 -85z m-505 -784
       c76 -37 161 -124 200 -203 72 -148 87 -364 34 -480 -54 -116 -126 -178 -206
       -178 -73 0 -121 69 -100 146 13 50 30 58 70 34 47 -28 75 -25 113 13 56 56 70
       186 29 284 -26 62 -83 131 -131 159 -86 51 -189 29 -229 -48 -21 -40 -14 -106
       15 -146 33 -47 28 -62 -21 -62 -95 0 -202 83 -228 176 -15 53 -8 118 19 180
       65 147 271 206 435 125z m1137 16 c30 -13 72 -36 92 -51 72 -55 115 -195 87
       -281 -27 -82 -138 -165 -220 -165 -53 0 -59 17 -24 69 56 85 11 193 -86 211
       -68 12 -128 -10 -184 -70 -71 -75 -96 -138 -96 -235 1 -155 74 -235 164 -176
       38 25 53 18 66 -31 22 -80 -26 -148 -105 -148 -84 0 -177 94 -215 218 -51 165
       1 407 117 542 106 123 271 171 404 117z m-676 -579 c27 -12 30 -21 60 -162 10
       -44 36 -117 61 -166 24 -48 44 -95 44 -103 0 -17 -63 -102 -123 -164 -45 -47
       -72 -53 -113 -27 -31 21 -154 173 -154 192 0 8 15 41 34 75 43 77 72 163 86
       253 8 53 16 74 36 92 29 25 34 26 69 10z`,
       BURGER_MENU : {
           d1: `M325 4466 c-129 -41 -227 -126 -284 -245 -33 -70 -36 -85 -39 -181
           -3 -86 0 -115 17 -164 56 -160 188 -275 350 -306 74 -14 4308 -14 4382 0 162
           31 294 146 350 306 17 49 20 78 17 164 -3 96 -6 111 -39 181 -48 99 -118 170
           -218 218 l-76 36 -2210 2 c-1768 1 -2218 -1 -2250 -11z
           `,
           d2: `M331 3004 c-123 -33 -237 -130 -294 -251 -31 -65 -32 -73 -32 -194 0
           -124 0 -126 37 -200 60 -121 169 -211 293 -243 53 -14 300 -16 2225 -16 1925
           0 2172 2 2225 16 124 32 233 122 293 243 37 75 37 76 37 201 0 125 0 126 -37
           201 -60 121 -169 211 -293 243 -53 14 -299 16 -2230 15 -1867 0 -2178 -2
           -2224 -15z
           `,
           d3: `M343 1545 c-155 -42 -271 -149 -324 -301 -17 -49 -20 -78 -17 -164 3
           -96 6 -111 39 -181 48 -99 118 -170 218 -218 l76 -36 2225 0 2225 0 76 36
           c100 48 170 119 218 218 33 70 36 85 39 181 3 86 0 115 -17 164 -54 154 -169
           260 -328 301 -84 22 -4349 21 -4430 0z
           `
       }
    },
    routes : {
        HOME : {
            PATH : "/",
            TITLE : "Accueil"
        },
        HOME2 : {
            PATH : "/seller2",
            TITLE : "Accueil 2"
        },
        LOGIN : {
            PATH : "/login",
            TITLE : "Connexion"
        },
        PAIEMENT : {
            PATH : "/paiement/:id",
            TITLE : "Paiement"
        },
        PSP : {
            PATH : "/psp/:id",
            TITLE : "Validation de la transaction..."
        },
        VALIDATE_PAIEMENT : {
            PATH : "/validate_paiement/:id",
            TITLE : "Commande validée"
        },
        CANCEL_PAIEMENT : {
            PATH : "/cancel_paiement/:id",
            TITLE : "Commande annulée"
        },
        REGISTER : {
            PATH : "/register",
            TITLE : "Inscription"
        },
        DASHBOARD : {
            PATH : "/dashboard",
            TITLE : "Dashboard"
        },
        PARAMETERS : {
            PATH : "/parameters",
            TITLE : "Paramètres"
        },
        HISTORY : {
            PATH : "/history",
            TITLE : "Historique"
        },
        LIST_MERCHANT : {
            PATH : "/list_merchant",
            TITLE : "Liste des marchands"
        }

    }
}

export default providers;