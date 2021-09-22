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
    
      
      
    
      const element = document.getElementById("5823b289-bbc9-4d7f-94fb-d8692f91143a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5823b289-bbc9-4d7f-94fb-d8692f91143a' but no matching script tag was found.")
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
                    
                  const docs_json = '{"6629ab51-47f6-4715-8822-25b0de17c461":{"defs":[],"roots":{"references":[{"attributes":{"tools":[{"id":"23807"},{"id":"23808"},{"id":"23809"},{"id":"23810"},{"id":"23811"},{"id":"23812"},{"id":"23813"},{"id":"23814"}]},"id":"23817","type":"Toolbar"},{"attributes":{},"id":"23807","type":"ResetTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23840","type":"Patch"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23829","type":"Patch"},{"attributes":{},"id":"23813","type":"SaveTool"},{"attributes":{},"id":"23850","type":"AllLabels"},{"attributes":{},"id":"23859","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23834","type":"Patch"},{"attributes":{"coordinates":null,"formatter":{"id":"23849"},"group":null,"major_label_policy":{"id":"23850"},"ticker":{"id":"23804"}},"id":"23803","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"CG43uWF68D9UuKA5TE/wPxP+Gw4nf/A/cmI5ASuh8D+fBS7DOsLwP/g55VUL7/A/pZrzkcYn8T+qUYhJJozxP5Yzhahc1fE/bLYxI9gM8j+QfNtXF47yP7wE0U+OCfM/gUzJpp4R8z9ybMw0O7bzP+LVHPe/PfQ/B+tsrj2R9D8Ip2ie8XH1PwwL6VBVlvU/LHi0RSOm9j+nfLH3rbL2P1BJAO1U2vc/7qMsm2H69z94GkyUhg75P7PRese5Zfk/nOuXO7hC+j94Zn9jnd36P8C84+Lpdvs/qPepmZtp/D/ojS+KG6v8PwxfezFN3/0/ndahBKAx/j8wMMfYfhP/P6yACUDYIwBAAESiQYhVAEA+aa8T8b0AQNBRVecJWAFAZDr7uiLyAUD2IqGOO4wCQIgLR2JUJgNAHPTsNW3AA0Cu3JIJhloEQEDFON2e9ARAGKHaMmkZBUDUrd6wt44FQGaWhITQKAZAg0lVLHmoBkD4fipY6cIGQH3G6MpkUQdAjGfQKwJdB0D9b5JAGs4HQB5Qdv8a9wdAKp1H1eMdCECSTRcIPEQIQHuon5S9WAhAm1udvZllCEDzZDGSSWEIQFq65Z47QghAFK5V++wQCEAeUHb/GvcHQISl0bOR1AdA9TdIrcGLB0CMZ9ArAl0HQDGMz//WNQdAzjNALqDfBkD4fipY6cIGQJAnHYw0kQZAgjBByqQxBkBmloSE0CgGQF1Is3TVvQVA1K3esLeOBUCsIvW+CzYFQEDFON2e9ARAq3pejM2rBECu3JIJhloEQEZ8OIGYGARAHPTsNW3AA0C1O8bDzVcDQIgLR2JUJgNA9iKhjjuMAkCERG8PuWoCQGQ6+7oi8gFAs+VnkwNnAUDQUVXnCVgBQD5prxPxvQBA8uW7p+9CAECsgAlA2CMAQDAwx9h+E/8/DF97MU3f/T/ROsib1cT8P+mNL4obq/w/wLzj4ul2+z+c65c7uEL6P3gaTJSGDvk/UEkA7VTa9z8seLRFI6b2P1vFGhVsv/U/CKdonvFx9T/i1Rz3vz30P090eWUl1fM/vATRT44J8z8m4dsWs5byP5Yzhahc1fE/hx2bSDWi8T/Nx744pAfxP3JiOQErofA/CG43uWF68D8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"iKVO0Tks+D/YQ7uuD0v5PyjiJ4zlafo/zBA5rX8A+z94gJRpu4j7P8geAUeRp/w/FL1tJGfG/T9kW9oBPeX+PxFOJAvviP8/2nyjbwkCAEACzFledJEAQIRgH05DFwFAKhsQTd8gAUBSasY7SrABQFzeBATaCAJAerl8KrU/AkDNCc8+trsCQKIIMxkgzwJAhCFzIclYA0DKV+kHi14DQMI+OBza4ANA8Kaf9vXtA0AAT65I5loEQBj2VeVgfQRAdG2J0JrRBEBARQzUywwFQALGISP9RAVAaJTCwjacBUBHdVCpKLMFQEPdRbxvFQZAkON4saErBkCsRMuGAGgGQEdeCUcnqgZAuDIvoAy7BkCaYQYU9d4GQBKxhTszDwdAw1cMakU0B0DggeWOd0oHQJa+hAQZVwdAPb0w9CBcB0D9r9yNb1oHQISHSRPnUAdA4IHljndKB0C1SvMEFzUHQMLx7+TC/QZAuDIvoAy7BkCzbzNl36kGQJDjeLGhKwZAo2Of3TofBkBolMLCNpwFQPqGX9zXWAVAQEUM1MsMBUAY9lXlYH0EQPCmn/b17QNAylfpB4teA0CiCDMZIM8CQHq5fCq1PwJAUmrGO0qwAUBfEP8up3IBQCobEE3fIAFAAsxZXnSRAEAFhoW1KEQAQNp8o28JAgBAZFvaAT3l/j8QZMkhEYL+PxS9bSRnxv0/yB4BR5Gn/D9v56yNsZL8P3iAlGm7iPs/aohidtkm+z8o4ieM5Wn6P6P/qV7e4vk/2EO7rg9L+T+0i0xpxKb4P4ilTtE5LPg/JKTYfBmg9z84B+LzYw33P44uhQftzfY/XvEtF30R9j/oaHUWju71PxnUWex3ZfU/msoIObjP9D8DVSmsrL/0Py8SBe7fIvQ/SiycW+Kw8z85/pOqIpfzP6Qnp+pGK/M/NDnCQkvU8j/6jS9+DJLyPw7TvGImjPI/ehLbQPtD8j8bEFA/TQbyP5zjNZ3q6/E/uHexJlf88T9yj/e+ukLyP/qNL34MkvI/hZe/jC+y8j8lW5wtPlvzP0osnFvisPM/PXn2nfdj9D+aygg5uM/0PzWzIcpiofU/6Gh1Fo7u9T84B+LzYw33P4pIKBYz2/c/iKVO0Tks+D8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"23859"},"selection_policy":{"id":"23858"}},"id":"23838","type":"ColumnDataSource"},{"attributes":{},"id":"23849","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"23838"},"glyph":{"id":"23839"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23841"},"nonselection_glyph":{"id":"23840"},"view":{"id":"23843"}},"id":"23842","type":"GlyphRenderer"},{"attributes":{},"id":"23854","type":"UnionRenderers"},{"attributes":{"end":6.552826016605417,"start":-2.340752367037428},"id":"23845","type":"Range1d"},{"attributes":{},"id":"23857","type":"Selection"},{"attributes":{},"id":"23797","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"23832"},"glyph":{"id":"23833"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23835"},"nonselection_glyph":{"id":"23834"},"view":{"id":"23837"}},"id":"23836","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23838"}},"id":"23843","type":"CDSView"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23835","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23828","type":"Patch"},{"attributes":{},"id":"23810","type":"WheelZoomTool"},{"attributes":{},"id":"23795","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null},"id":"23846","type":"Title"},{"attributes":{"source":{"id":"23826"}},"id":"23831","type":"CDSView"},{"attributes":{},"id":"23804","type":"BasicTicker"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23827","type":"Patch"},{"attributes":{"coordinates":null,"data_source":{"id":"23826"},"glyph":{"id":"23827"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23829"},"nonselection_glyph":{"id":"23828"},"view":{"id":"23831"}},"id":"23830","type":"GlyphRenderer"},{"attributes":{},"id":"23858","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"23864"},"toolbar_location":"above"},"id":"23865","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[318]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[318]}},"selected":{"id":"23857"},"selection_policy":{"id":"23856"}},"id":"23832","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"23852"},"group":null,"major_label_policy":{"id":"23853"},"ticker":{"id":"23800"}},"id":"23799","type":"LinearAxis"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23841","type":"Patch"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23833","type":"Patch"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23815","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[530]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[530]}},"selected":{"id":"23855"},"selection_policy":{"id":"23854"}},"id":"23826","type":"ColumnDataSource"},{"attributes":{},"id":"23812","type":"UndoTool"},{"attributes":{},"id":"23855","type":"Selection"},{"attributes":{"below":[{"id":"23799"}],"center":[{"id":"23802"},{"id":"23806"}],"height":500,"left":[{"id":"23803"}],"output_backend":"webgl","renderers":[{"id":"23830"},{"id":"23836"},{"id":"23842"}],"title":{"id":"23846"},"toolbar":{"id":"23817"},"toolbar_location":null,"width":500,"x_range":{"id":"23844"},"x_scale":{"id":"23795"},"y_range":{"id":"23845"},"y_scale":{"id":"23797"}},"id":"23790","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"23814","type":"HoverTool"},{"attributes":{},"id":"23800","type":"BasicTicker"},{"attributes":{},"id":"23808","type":"PanTool"},{"attributes":{},"id":"23852","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"23816"}},"id":"23811","type":"LassoSelectTool"},{"attributes":{},"id":"23856","type":"UnionRenderers"},{"attributes":{},"id":"23853","type":"AllLabels"},{"attributes":{"axis":{"id":"23799"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23802","type":"Grid"},{"attributes":{"toolbars":[{"id":"23817"}],"tools":[{"id":"23807"},{"id":"23808"},{"id":"23809"},{"id":"23810"},{"id":"23811"},{"id":"23812"},{"id":"23813"},{"id":"23814"}]},"id":"23864","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23816","type":"PolyAnnotation"},{"attributes":{"end":6.833032917337429,"start":-2.7227856352323467},"id":"23844","type":"Range1d"},{"attributes":{"children":[{"id":"23865"},{"id":"23863"}]},"id":"23866","type":"Column"},{"attributes":{"axis":{"id":"23803"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23806","type":"Grid"},{"attributes":{"source":{"id":"23832"}},"id":"23837","type":"CDSView"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23839","type":"Patch"},{"attributes":{"overlay":{"id":"23815"}},"id":"23809","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"23790"},0,0]]},"id":"23863","type":"GridBox"}],"root_ids":["23866"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"6629ab51-47f6-4715-8822-25b0de17c461","root_ids":["23866"],"roots":{"23866":"5823b289-bbc9-4d7f-94fb-d8692f91143a"}}];
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