(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("8e4aac8d-faad-41b0-bb69-1b4396c5cb5f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8e4aac8d-faad-41b0-bb69-1b4396c5cb5f' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"fab01cc0-a6c7-4f7d-89c3-4b06a3d834fb":{"defs":[],"roots":{"references":[{"attributes":{},"id":"41745","type":"BasicTicker"},{"attributes":{"children":[[{"id":"41735"},0,0],[{"id":"41771"},0,1]]},"id":"41865","type":"GridBox"},{"attributes":{"source":{"id":"41817"}},"id":"41819","type":"CDSView"},{"attributes":{"source":{"id":"41807"}},"id":"41812","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41839"},"group":null,"major_label_policy":{"id":"41840"},"ticker":{"id":"41749"}},"id":"41748","type":"LinearAxis"},{"attributes":{},"id":"41844","type":"UnionRenderers"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41861"},"selection_policy":{"id":"41860"}},"id":"41832","type":"ColumnDataSource"},{"attributes":{},"id":"41845","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"41807"},"glyph":{"id":"41808"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41810"},"nonselection_glyph":{"id":"41809"},"view":{"id":"41812"}},"id":"41811","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41813","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41816","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41814","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41820","type":"Title"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41856"},"group":null,"major_label_policy":{"id":"41857"},"ticker":{"id":"41781"}},"id":"41780","type":"LinearAxis"},{"attributes":{"overlay":{"id":"41761"}},"id":"41756","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41859"},"selection_policy":{"id":"41858"}},"id":"41822","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41815","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41847"},"selection_policy":{"id":"41846"}},"id":"41817","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"41817"},"glyph":{"id":"41816"},"group":null,"hover_glyph":null,"view":{"id":"41819"}},"id":"41818","type":"GlyphRenderer"},{"attributes":{"end":1,"start":-0.05},"id":"41774","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41835","type":"Title"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41853"},"group":null,"major_label_policy":{"id":"41854"},"ticker":{"id":"41785"}},"id":"41784","type":"LinearAxis"},{"attributes":{"source":{"id":"41832"}},"id":"41834","type":"CDSView"},{"attributes":{"toolbars":[{"id":"41762"},{"id":"41798"}],"tools":[{"id":"41752"},{"id":"41753"},{"id":"41754"},{"id":"41755"},{"id":"41756"},{"id":"41757"},{"id":"41758"},{"id":"41759"},{"id":"41788"},{"id":"41789"},{"id":"41790"},{"id":"41791"},{"id":"41792"},{"id":"41793"},{"id":"41794"},{"id":"41795"}]},"id":"41866","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"41744"},"coordinates":null,"group":null,"ticker":null},"id":"41747","type":"Grid"},{"attributes":{},"id":"41776","type":"LinearScale"},{"attributes":{},"id":"41846","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41809","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"41832"},"glyph":{"id":"41831"},"group":null,"hover_glyph":null,"view":{"id":"41834"}},"id":"41833","type":"GlyphRenderer"},{"attributes":{},"id":"41778","type":"LinearScale"},{"attributes":{},"id":"41757","type":"UndoTool"},{"attributes":{"callback":null},"id":"41795","type":"HoverTool"},{"attributes":{},"id":"41847","type":"Selection"},{"attributes":{},"id":"41781","type":"BasicTicker"},{"attributes":{"axis":{"id":"41780"},"coordinates":null,"group":null,"ticker":null},"id":"41783","type":"Grid"},{"attributes":{"toolbar":{"id":"41866"},"toolbar_location":"above"},"id":"41867","type":"ToolbarBox"},{"attributes":{"axis":{"id":"41748"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41751","type":"Grid"},{"attributes":{},"id":"41853","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"41784"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41787","type":"Grid"},{"attributes":{},"id":"41785","type":"BasicTicker"},{"attributes":{},"id":"41772","type":"DataRange1d"},{"attributes":{},"id":"41854","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41810","type":"Circle"},{"attributes":{"overlay":{"id":"41796"}},"id":"41790","type":"BoxZoomTool"},{"attributes":{},"id":"41789","type":"PanTool"},{"attributes":{},"id":"41856","type":"BasicTickFormatter"},{"attributes":{},"id":"41788","type":"ResetTool"},{"attributes":{"overlay":{"id":"41760"}},"id":"41754","type":"BoxZoomTool"},{"attributes":{},"id":"41794","type":"SaveTool"},{"attributes":{},"id":"41791","type":"WheelZoomTool"},{"attributes":{},"id":"41857","type":"AllLabels"},{"attributes":{"overlay":{"id":"41797"}},"id":"41792","type":"LassoSelectTool"},{"attributes":{},"id":"41793","type":"UndoTool"},{"attributes":{},"id":"41753","type":"PanTool"},{"attributes":{"children":[{"id":"41867"},{"id":"41865"}]},"id":"41868","type":"Column"},{"attributes":{"tools":[{"id":"41788"},{"id":"41789"},{"id":"41790"},{"id":"41791"},{"id":"41792"},{"id":"41793"},{"id":"41794"},{"id":"41795"}]},"id":"41798","type":"Toolbar"},{"attributes":{},"id":"41752","type":"ResetTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41796","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41797","type":"PolyAnnotation"},{"attributes":{},"id":"41758","type":"SaveTool"},{"attributes":{"source":{"id":"41822"}},"id":"41827","type":"CDSView"},{"attributes":{},"id":"41858","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"41759","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41822"},"glyph":{"id":"41823"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41825"},"nonselection_glyph":{"id":"41824"},"view":{"id":"41827"}},"id":"41826","type":"GlyphRenderer"},{"attributes":{},"id":"41755","type":"WheelZoomTool"},{"attributes":{},"id":"41859","type":"Selection"},{"attributes":{},"id":"41742","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41824","type":"Circle"},{"attributes":{"below":[{"id":"41744"}],"center":[{"id":"41747"},{"id":"41751"}],"height":500,"left":[{"id":"41748"}],"output_backend":"webgl","renderers":[{"id":"41811"},{"id":"41813"},{"id":"41814"},{"id":"41815"},{"id":"41818"}],"title":{"id":"41820"},"toolbar":{"id":"41762"},"toolbar_location":null,"width":500,"x_range":{"id":"41736"},"x_scale":{"id":"41740"},"y_range":{"id":"41738"},"y_scale":{"id":"41742"}},"id":"41735","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41823","type":"Circle"},{"attributes":{},"id":"41749","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41825","type":"Circle"},{"attributes":{},"id":"41740","type":"LinearScale"},{"attributes":{"tools":[{"id":"41752"},{"id":"41753"},{"id":"41754"},{"id":"41755"},{"id":"41756"},{"id":"41757"},{"id":"41758"},{"id":"41759"}]},"id":"41762","type":"Toolbar"},{"attributes":{"below":[{"id":"41780"}],"center":[{"id":"41783"},{"id":"41787"}],"height":500,"left":[{"id":"41784"}],"output_backend":"webgl","renderers":[{"id":"41826"},{"id":"41828"},{"id":"41829"},{"id":"41830"},{"id":"41833"}],"title":{"id":"41835"},"toolbar":{"id":"41798"},"toolbar_location":null,"width":500,"x_range":{"id":"41772"},"x_scale":{"id":"41776"},"y_range":{"id":"41774"},"y_scale":{"id":"41778"}},"id":"41771","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41736","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41760","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41761","type":"PolyAnnotation"},{"attributes":{},"id":"41839","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41828","type":"Span"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41842"},"group":null,"major_label_policy":{"id":"41843"},"ticker":{"id":"41745"}},"id":"41744","type":"LinearAxis"},{"attributes":{},"id":"41840","type":"AllLabels"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41831","type":"Scatter"},{"attributes":{},"id":"41860","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41830","type":"Span"},{"attributes":{},"id":"41842","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41829","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41845"},"selection_policy":{"id":"41844"}},"id":"41807","type":"ColumnDataSource"},{"attributes":{"end":1,"start":-0.05},"id":"41738","type":"DataRange1d"},{"attributes":{},"id":"41861","type":"Selection"},{"attributes":{},"id":"41843","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41808","type":"Circle"}],"root_ids":["41868"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"fab01cc0-a6c7-4f7d-89c3-4b06a3d834fb","root_ids":["41868"],"roots":{"41868":"8e4aac8d-faad-41b0-bb69-1b4396c5cb5f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();